import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchMovie from "../util/fecthMovie";
import fetchStreaming from "../util/fetchStreaming";
import filmPlacholder from "../assets/film-placeholder.png";
import Ratings from "../components/Ratings";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchMovie);
  const streamingResults = useQuery(["streaming", id], fetchStreaming);

  if (results.isLoading || streamingResults.isLoading) {
    return <h2 className="text-light">Loading...</h2>;
  }

  const streaming = streamingResults.data.streamingAvailability.country.US;
  const movie = results.data;

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
          <Ratings ratings={movie.Ratings} />
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
