import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchMovie from "../util/fecthMovie";
import fetchStreaming from "../util/fetchStreaming";
import imdb from "../assets/imdb.png";
import metacritic from "../assets/metacritic.png";
import tomato from "../assets/tomato.png";
import filmPlacholder from "../assets/film-placeholder.png";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchMovie);
  const streamingResults = useQuery(["streaming", id], fetchStreaming);

  if (results.isLoading || streamingResults.isLoading) {
    return <h2 className="text-light">Loading...</h2>;
  }

  const streaming = streamingResults.data.streamingAvailability.country.US;
  const movie = results.data;

  const getRatings = () => {
    if (movie.Ratings !== undefined) {
      let ratings = movie.Ratings.map((rating, id) => (
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
      <Link to="/" className="btn">
        Go Back
      </Link>
      <h1 className="text-light">
        {movie.Title} ({movie.Year})
      </h1>
      <div className="info">
        <span className="rating">{movie.Rated}</span>
        <span className="runtime">{movie.Runtime}</span>
        <span className="genre">{movie.Genre}</span>
        <span className="released">
          {movie.Released} ({movie.Country})
        </span>
        {movie.Language !== "N/A" && (
          <span className="language">{movie.Language}</span>
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
            src={movie.Poster}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = filmPlacholder;
            }}
            alt={`${movie.Title} poster`}
          />
          <div className="ratings">{getRatings()}</div>
        </div>
        <div className="about">
          <p className="plot">{movie.Plot}</p>

          <div className="credits">
            <p className="production">
              <strong>Production: </strong>
              {movie.Production}
            </p>
            <p className="director">
              <strong>Director: </strong>
              {movie.Director}
            </p>
            <p className="writer">
              <strong>Writer: </strong>
              {movie.Writer}
            </p>
            <p className="stars">
              <strong>Stars: </strong>
              {movie.Actors}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
