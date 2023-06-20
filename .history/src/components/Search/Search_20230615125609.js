import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
const Search = () => {
  const [search, setSearch] = useState(null);
  return (
    <AsyncPaginate
      placeholder="Search for a city"
      debounceTimeout={600}
      value={Search}
    />
  );
};

export default Search;
