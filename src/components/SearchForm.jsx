import { useState } from "react";

const SearchForm = () => {
  return (
    <div className="search-form">
      <form>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            placeholder="Search for movie title"
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
