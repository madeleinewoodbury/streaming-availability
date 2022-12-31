import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchMovie from "../util/fecthMovie";
import streamingData from "../data/streaming.json";
import imdb from "../assets/imdb.png";
import metacritic from "../assets/metacritic.png";
import tomato from "../assets/tomato.png";
import filmPlacholder from "../assets/film-placeholder.png";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchMovie);
  const streaming = streamingData.streamingAvailability.country.US;

  if (results.isLoading) {
    return <h2 className="text-light">Loading...</h2>;
  }

  const getRatings = () => {
    if (results.data.Ratings !== undefined) {
      let ratings = results.data.Ratings.map((rating, id) => (
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
        {results.data.Title} ({results.data.Year})
      </h1>
      <div className="info">
        <span className="rating">{results.data.Rated}</span>
        <span className="runtime">{results.data.Runtime}</span>
        <span className="genre">{results.data.Genre}</span>
        <span className="released">
          {results.data.Released} ({results.data.Country})
        </span>
        {results.data.Language !== "N/A" && (
          <span className="language">{results.data.Language}</span>
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
            src={results.data.Poster}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = filmPlacholder;
            }}
            alt={`${results.data.Title} poster`}
          />
          <div className="ratings">{getRatings()}</div>
        </div>
        <div className="about">
          <p className="plot">{results.data.Plot}</p>

          <div className="credits">
            <p className="production">
              <strong>Production: </strong>
              {results.data.Production}
            </p>
            <p className="director">
              <strong>Director: </strong>
              {results.data.Director}
            </p>
            <p className="writer">
              <strong>Writer: </strong>
              {results.data.Writer}
            </p>
            <p className="stars">
              <strong>Stars: </strong>
              {results.data.Actors}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
