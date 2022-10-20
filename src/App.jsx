import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState(null);

  const getMovies = () => {
    const options = {
      method: "GET",
      url: "https://streaming-availability.p.rapidapi.com/get/basic",
      params: { country: "us", tmdb_id: "movie/120", output_language: "en" },
      headers: {
        "X-RapidAPI-Key": "4352a3c067mshb2c5424d4de88ffp1bc3e6jsn125fd08dd6b7",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log("movies", movies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
