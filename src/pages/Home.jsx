import SearchForm from "../components/SearchForm";
import Results from "../components/Results";

const Home = () => {
  return (
    <div className="home">
      <SearchForm />
      <Results />
    </div>
  );
};

export default Home;
