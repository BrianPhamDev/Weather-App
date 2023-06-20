import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
const Search = () => {
  return (
    <AsyncPaginate placeholder="Search for a city" debounceTimeout={600} />
  );
};

export default Search;
