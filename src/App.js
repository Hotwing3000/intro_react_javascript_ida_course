// Imports useState hook from React and CSS styling
import { useEffect, useState } from "react"
import "./App.css"
import AddMovie from "./componentFolder/AddMovie"

// Defines the main App component
function App() {
  // Initializes states using useState hook
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(null)
  const [genre, setGenre] = useState("")
  const [movies, setMovies] = useState([])

  // Gets and Sets movies from database (currently dummy data)
  useEffect(() => {
    const getMovies = async () => {
      /*
      const response = await fetch("https://javascriptdb-46f88-default-rtdb.europe-west1.firebasedatabase.app/movies.json")
      const data = await response.json()
      setMovies(data)
      */
      const dummpyMovies = [
        {"title": "Shawshank Redemption", "rating": 10, "genre": "Drama"},
        {"title": "Min søsters børn", "rating": 6, "genre": "Komedie"},
        {'title': "Inglorious Bastards", "rating": 10, "genre": "Action"}
      ]
      setMovies(dummpyMovies)
    }
    getMovies()
  }, [])
/*
  [
    {"title": "Shawshank Redemption", "rating": 10, "genre": "Drama"},
    {"title": "Min søsters børn", "rating": 6, "genre": "Komedie"},
    {'title': "Inglorious Bastards", "rating": 10, "genre": "Action"}
  ]
*/

  // function to update movies
  const updateMovies = async(idx, key, value) => {
    const newMovie = { 
      title: title != "" ? title : movies[idx].title, 
      rating: rating != null ? rating : movies[idx].rating, 
      genre: genre != "" ? genre : movies[idx].genre }

      const response = await fetch(`https://javascriptdb-46f88-default-rtdb.europe-west1.firebasedatabase.app/movies/${idx}.json`, {
        method: "PATCH",
        body: JSON.stringify(newMovie)
      })
      setTitle('')
      setRating(null)
      setGenre("")
      if(response.ok) alert("Movie updated!")
      else alert("Error updating movie. Response: " + response.statusText)
  }

  return (
    <div className="Container">

      <AddMovie title={title} setTitle={setTitle} rating={rating} setRating={setRating} genre={genre} setGenre={setGenre} movies={movies} setMovies={setMovies}/>

      {/* List section to display existing movies */}
      <div className="List">
        <div className="HeaderText">Movies & Ratings</div>
        <div className="movie-row">
          <div className="DictItemCenterLong header-item">Title</div>
          <div className="DictItemCenterShort header-item">Rating</div>
          <div className="DictItemCenterMedium header-item">Genre</div>
          <div className="DictItemCenterShort header-item"/> {/* Placeholder for button column */}
        </div>

        {/* Maps through movies and displays them */}
        {movies && (
          movies.map((movie, idx) => {
            if(movies[idx] != null) {
              return (
                <div key={idx} style={{ display: 'flex', height: '10%', width: '100%', borderBottom: '1px solid black', justifyContent: 'space-around'}}>
                  <input onChange={(e) => setTitle(e.target.value)} placeholder={movie["title"]} defaultValue={movie["title"]} className="DictItemCenterLong" />
                  <input onChange={(e) => setRating(e.target.value)} placeholder={movie["rating"]} defaultValue={movie["rating"]} className="DictItemCenterShort" />
                  <input onChange={(e) => setGenre(e.target.value)} placeholder={movie['genre']} defaultValue={movie['genre']} className="DictItemCenterMedium"/>
                  <button onClick={() => updateMovies(idx, "title", title)} className="DictItemCenterShort">Change</button>
                </div>
              )
            }
          })
        )}
      </div>
    </div>
  )
}

// Exports the App component as default export.
export default App
