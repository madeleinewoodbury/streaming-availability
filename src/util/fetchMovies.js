const fetchMovies = async ({ queryKey }) => {
  const title = queryKey[1];

  if (title === undefined || title === "") {
    return [];
  }
  const apiRes = await fetch(
    `https://www.omdbapi.com/?s=${title}&type=movie&apikey=${
      import.meta.env.VITE_OMDB_API_KEY
    }`
  );

  if (!apiRes.ok) {
    console.log("Something went wrong");
  }

  return apiRes.json();
};

export default fetchMovies;
