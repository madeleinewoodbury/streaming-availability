import imdb from "../assets/imdb.png";
import metacritic from "../assets/metacritic.png";
import tomato from "../assets/tomato.png";

const Ratings = ({ ratings }) => {
  return (
    <div className="ratings">
      {ratings.map((rating) => (
        <div className="rating" key={rating.Source}>
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
      ))}
    </div>
  );
};

export default Ratings;
