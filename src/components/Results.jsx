import movies from "../data/movies.json";

const Results = () => {
  return (
    <div className="results">
      {movies.Search.map((movie) => (
        <div key={movie.imdbID} className="card">
          <img src={movie.Poster} alt={movie.Title} />
          <a href="/">
            {movie.Title} ({movie.Year})
          </a>
        </div>
      ))}
    </div>
  );
};

export default Results;
