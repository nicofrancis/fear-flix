import axios from "axios";
import { useEffect, useState } from "react";
import { Movies, Navbar } from "./components";

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
        const arrayOfData = Object.keys(response.properties.data).map(
          (key) => response.properties.data[key]
        );
        setMovies(arrayOfData);
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
      <Navbar />
      <h1 className="text-4xl font-bold">Fear.flix</h1>
      <Movies movies={movies} />
    </div>
  );
}

export default App;
