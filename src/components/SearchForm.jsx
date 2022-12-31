import { useState } from "react";

const SearchForm = ({ handleSubmit }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="search-form">
      <form onSubmit={(e) => handleSubmit(e, search)}>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for movie title"
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
