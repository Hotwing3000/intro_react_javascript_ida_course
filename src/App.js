// Imports useState hook from React and CSS styling
import "./App.css"
import AddMovie from "./componentFolder/AddMovie"
import MovieRatings from "./componentFolder/MovieRatings"
import Navbar from "./componentFolder/Navbar";
import useMovies from "./useMovies"

// Defines the main App component
function App() {
  // Uses custom hook to manage movie-related state and actions
  const { title, setTitle, rating, setRating, genre, setGenre, movies, setMovies, addMovie, updateMovies } = useMovies();

  return (
    <div className="Container">
      <AddMovie title={title} setTitle={setTitle} rating={rating} setRating={setRating} genre={genre} setGenre={setGenre} movies={movies} setMovies={setMovies} addMovie={addMovie}/>
      <MovieRatings title={title} setTitle={setTitle} rating={rating} setRating={setRating} genre={genre} setGenre={setGenre} movies={movies} updateMovies={updateMovies}/>

    </div>
  )
}

// Exports the App component as default export.
export default App



/*
  [
    {"title": "Shawshank Redemption", "rating": 10, "genre": "Drama"},
    {"title": "Min søsters børn", "rating": 6, "genre": "Komedie"},
    {'title': "Inglorious Bastards", "rating": 10, "genre": "Action"}
  ]
*/