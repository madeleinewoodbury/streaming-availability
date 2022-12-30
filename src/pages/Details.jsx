import data from "../data/movieData.json";
import streamingData from "../data/streaming.json";
import imdb from "../assets/imdb.png";
import metacritic from "../assets/metacritic.png";
import tomato from "../assets/tomato.png";
import filmPlacholder from "../assets/film-placeholder.png";

const Details = () => {
  const { movie } = data;
  const streaming = streamingData.streamingAvailability.country.US;

  const getRatings = () => {
    if (movie.ratings !== undefined) {
      let ratings = movie.ratings.map((rating, id) => (
        <div className="rating" key={id}>
          {rating.Source === "Internet Movie Database" && (
            <img className="imdb" src={imdb} alt="imdb" />
          )}
          {rating.Source === "Rotten Tomatoes" && (
            <img className="tomato" src={tomato} alt="rotten tomato" />
          )}
          {rating.Source === "Metacritic" && (
            <img className="metacritic" src={metacritic} alt="rotten tomato" />
          )}
          <span>{rating.Value}</span>
        </div>
      ));

      return ratings;
    }
  };

  return (
    <div className="details">
      <h1 className="title">
        {movie.title} ({movie.year})
      </h1>
      <div className="info">
        <span className="rating">{movie.rated}</span>
        <span className="runtime">{movie.runtime}</span>
        <span className="genre">{movie.genre}</span>
        <span className="released">
          {movie.Released} ({movie.country})
        </span>
        {movie.language !== "N/A" && (
          <span className="language">{movie.language}</span>
        )}
      </div>
      <ul className="streaming">
        {streaming.map((item) => (
          <li key={item.url}>
            <a href={item.url}>{item.platform}</a>
          </li>
        ))}
      </ul>
      <div className="content">
        <div className="poster">
          <img
            src={movie.poster}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = filmPlacholder;
            }}
            alt={`${movie.title} poster`}
          />
          <div className="ratings">{getRatings()}</div>
        </div>
        <div className="about">
          <p className="plot">{movie.plot}</p>

          <div className="credits">
            <p className="production">
              <strong>Production: </strong>
              {movie.production}
            </p>
            <p className="director">
              <strong>Director: </strong>
              {movie.director}
            </p>
            <p className="writer">
              <strong>Writer: </strong>
              {movie.writer}
            </p>
            <p className="stars">
              <strong>Stars: </strong>
              {movie.actors}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
