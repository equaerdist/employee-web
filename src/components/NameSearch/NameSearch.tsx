import { useDeferredValue, useState } from "react";
import SearchBox from "../Common/SearchBox";
import { useGetEmployeeNamesQuery } from "../../lib/services/hintApiV1";

export const NameSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const deferredValue = useDeferredValue(searchValue);
  const { data: { names } = { names: [] }, isLoading } =
    useGetEmployeeNamesQuery({
      name_search_term: deferredValue,
    });

  return (
    <SearchBox
      searchValue={deferredValue}
      setSearchValue={setSearchValue}
      options={isLoading ? ["1"] : names}
      isLoading={isLoading}
    ></SearchBox>
  );
};
