const fetchMovie = async ({ queryKey }) => {
  const id = queryKey[1];

  if (id === undefined || id === "") {
    return [];
  }
  const apiRes = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=${
      import.meta.env.VITE_OMDB_API_KEY
    }`
  );

  if (!apiRes.ok) {
    console.log("Something went wrong");
  }

  return apiRes.json();
};

export default fetchMovie;
