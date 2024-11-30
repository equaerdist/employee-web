import { useParams } from "react-router";
import { Section } from "../Section/Section";
import { useGetEmployeeByIdQuery } from "../../lib/services/employeeApiV1";

import { Loading } from "../Common/Loading";
import { Error } from "../Common/Error";
import { employeeMock } from "../../mocks/faker";
import { EmployeeProfile } from "../EmployeeProfile/EmployeeProfile";
import { Box } from "@mui/material";
import { NameSearch } from "../Searches/NameSearch/NameSearch";
import { useSearchBox } from "../../hooks/useSearchBox";

export const EmployeePage = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useSearchBox();
  const {
    data: data = employeeMock,
    isLoading,
    isError,
  } = useGetEmployeeByIdQuery({ id: Number(id ?? 0) });
  return (
    <Section>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <NameSearch value={name} setValue={setName}></NameSearch>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error />
        ) : (
          <EmployeeProfile data={data}></EmployeeProfile>
        )}
      </Box>
    </Section>
  );
};
