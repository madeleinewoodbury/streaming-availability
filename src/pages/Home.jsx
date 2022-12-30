import SearchForm from "../components/SearchForm";
import Results from "../components/Results";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1 className="title text-primary">
          Streaming <span className="text-light">Availability</span>
        </h1>
      </header>
      <SearchForm />
      <Results />
    </div>
  );
};

export default Home;
