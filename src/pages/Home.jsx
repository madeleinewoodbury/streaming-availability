import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import fetchMovies from "../util/fetchMovies";

const Home = () => {
  const [requestParam, setRequestParam] = useState("");
  const results = useQuery(["search", requestParam], fetchMovies);
  const movies = results?.data?.Search ?? [];

  const handleSubmit = (e, search) => {
    e.preventDefault();
    setRequestParam(search);
  };
  return (
    <div className="home">
      <header>
        <h1 className="title text-primary">
          Streaming <span className="text-light">Availability</span>
        </h1>
      </header>
      <SearchForm handleSubmit={handleSubmit} />
      {movies.length ? <Results movies={movies} /> : null}
    </div>
  );
};

export default Home;
