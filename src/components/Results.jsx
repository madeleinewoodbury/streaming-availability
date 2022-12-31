import { Link } from "react-router-dom";
import filmPlaceholder from "../assets/film-placeholder.png";

const Results = ({ movies }) => {
  return (
    <div className="results">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="card">
          <Link to={`/movie/${movie.imdbID}`}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = filmPlaceholder;
              }}
            />
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
