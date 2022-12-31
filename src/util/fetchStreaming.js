const fetchStreaming = async ({ queryKey }) => {
  const id = queryKey[1];

  if (id === undefined || id === "") {
    return [];
  }

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_OTT_API_KEY,
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  };

  const apiRes = await fetch(
    `https://ott-details.p.rapidapi.com/gettitleDetails?imdbid=${id}`,
    options
  );

  if (!apiRes.ok) {
    console.log("Something went wrong");
  }

  return apiRes.json();
};

export default fetchStreaming;
