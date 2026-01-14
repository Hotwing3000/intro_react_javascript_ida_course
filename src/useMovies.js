import { useState, useEffect } from 'react';

function useMovies() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(null);
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);

  // Fetches movies from database (currently dummy data)
  useEffect(() => {
    const getMovies = async () => {
      /*
      const response = await fetch("https://javascriptdb-46f88-default-rtdb.europe-west1.firebasedatabase.app/movies.json");
      const data = await response.json();
      setMovies(data);
      */
      const dummyMovies = [
        {"title": "Shawshank Redemption", "rating": 10, "genre": "Drama"},
        {"title": "Min søsters børn", "rating": 6, "genre": "Komedie"},
        {'title': "Inglorious Bastards", "rating": 10, "genre": "Action"}
      ];
      setMovies(dummyMovies);
    };
    getMovies();
  }, []);

  // Adds a new movie to the movies list
  const addMovie = () => {
    const newMovie = { title, rating, genre };
    setMovies([...movies, newMovie]);
    setTitle('');   
    setRating(null);
    setGenre("");
  };

  // Updates an existing movie's details
  const updateMovies = async (idx, key, value) => {
    const newMovie = {
      title: title !== "" ? title : movies[idx].title,
      rating: rating !== null ? rating : movies[idx].rating,
      genre: genre !== "" ? genre : movies[idx].genre
    };

    const response = await fetch(`https://javascriptdb-46f88-default-rtdb.europe-west1.firebasedatabase.app/movies/${idx}.json`, {
      method: "PATCH",
      body: JSON.stringify(newMovie)
    });
    setTitle('');
    setRating(null);
    setGenre("");
    if (response.ok) alert("Movie updated!");
    else alert("Error updating movie. Response: " + response.statusText);
  };

  return { title, setTitle, rating, setRating, genre, setGenre, movies, setMovies, addMovie, updateMovies };
}

export default useMovies;