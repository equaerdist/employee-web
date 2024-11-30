import { useDeferredValue, useState } from "react";
import SearchBox from "../../Common/SearchBox";
import { useGetEmployeePositionsQuery } from "../../../lib/services/hintApiV1";

export const PositionSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const deferredValue = useDeferredValue(searchValue);
  const { data: { positions } = { positions: [] }, isLoading } =
    useGetEmployeePositionsQuery({
      position_search_term: deferredValue,
    });

  return (
    <SearchBox
      placeholder={"Поиск по позициям"}
      width={"40%"}
      searchValue={deferredValue}
      setSearchValue={setSearchValue}
      options={isLoading ? ["1"] : positions}
      isLoading={isLoading}
    ></SearchBox>
  );
};
