import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetEmployeeRequest } from "../../types/Contracts/V1/Employee/GetEmployeeRequest";
import { GetEmployeeResponse } from "../../types/Contracts/V1/Employee/GetEmloyeeResponse";
import { GetBaseEmployeesRequest } from "../../types/Contracts/V1/Employee/GetBaseEmployeesRequest";
import { GetBaseEmployeesResponse } from "../../types/Contracts/V1/Employee/GetBaseEmployeesResponse";
import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { BaseEmployee } from "../../types/Contracts/V1/Common/BaseEmployee";

export const baseEmployeesAdapter = createEntityAdapter<BaseEmployee>();

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "api/v1/employee" }),
  endpoints: (builder) => ({
    getEmployeeById: builder.query<GetEmployeeResponse, GetEmployeeRequest>({
      query: (req) => ({ url: ``, method: "POST", body: req }),
    }),
    getBaseEmployees: builder.query<
      EntityState<BaseEmployee, number>,
      GetBaseEmployeesRequest
    >({
      query: (req) => ({ url: "", method: "POST", body: req }),
      transformResponse: (res: GetBaseEmployeesResponse) => {
        return baseEmployeesAdapter.addMany(
          baseEmployeesAdapter.getInitialState(),
          res.employees
        );
      },
      keepUnusedDataFor: 1,
      forceRefetch: ({ currentArg, previousArg }) => {
        return (
          currentArg?.offset != previousArg?.offset ||
          currentArg?.limit != previousArg?.limit
        );
      },
      serializeQueryArgs: ({ queryArgs, endpointName }) => {
        return `${endpointName}-${queryArgs.limit}`;
      },
      merge: (current, incoming) => {
        baseEmployeesAdapter.addMany(
          current,
          baseEmployeesAdapter.getSelectors().selectAll(incoming)
        );
      },
    }),
  }),
});

export const { useGetBaseEmployeesQuery, useGetEmployeeByIdQuery } =
  employeeApi;
