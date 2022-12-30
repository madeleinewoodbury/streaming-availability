import { Link } from "react-router-dom";
import movies from "../data/movies.json";

const Results = () => {
  return (
    <div className="results">
      {movies.Search.map((movie) => (
        <div key={movie.imdbID} className="card">
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
          </Link>
          <Link to={`/movie/${movie.imdbID}`}>
            {movie.Title} ({movie.Year})
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Results;
