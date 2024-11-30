import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetEmployeeRequest } from "../../types/Contracts/V1/Employee/GetEmployeeRequest";
import { GetEmployeeResponse } from "../../types/Contracts/V1/Employee/GetEmloyeeResponse";
import { GetBaseEmployeesRequest } from "../../types/Contracts/V1/Employee/GetBaseEmployeesRequest";
import { GetBaseEmployeesResponse } from "../../types/Contracts/V1/Employee/GetBaseEmployeesResponse";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "api/v1/employee" }),
  endpoints: (builder) => ({
    getEmployeeById: builder.query<GetEmployeeResponse, GetEmployeeRequest>({
      query: (req) => ({ url: ``, method: "POST", body: req }),
    }),
    getBaseEmployees: builder.query<
      GetBaseEmployeesResponse,
      GetBaseEmployeesRequest
    >({
      query: (req) => ({ url: "", method: "POST", body: req }),
    }),
  }),
});

export const { useGetBaseEmployeesQuery, useGetEmployeeByIdQuery } =
  employeeApi;
