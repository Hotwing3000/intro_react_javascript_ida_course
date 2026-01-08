// Importerer useState-hook fra React og CSS-styling
import { useEffect, useState } from "react"
import "./App.css"
import AddMovie from "./componentFolder/AddMovie"

// Definerer hovedkomponenten App
function App() {
  // Initialiserer states ved hjælp af useState-hook
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(null)
  const [genre, setGenre] = useState("")
  const [movies, setMovies] = useState([])

  useEffect(() => {

    const getMovies = async () => {
      const response = await fetch("https://javascriptdb-46f88-default-rtdb.europe-west1.firebasedatabase.app/movies.json")
      const data = await response.json()
      setMovies(data)
    }
    getMovies()
  })
/*
  [
    {"title": "Shawshank Redemption", "rating": 10, "genre": "Drama"},
    {"title": "Min søsters børn", "rating": 6, "genre": "Komedie"},
    {'title': "Inglorious Bastards", "rating": 10, "genre": "Action"}
  ]
*/

  // Funktion til at opdatere oplysninger om film
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

      {/* Liste-sektion til at vise eksisterende film */}
      <div className="List">
        <div className="HeaderText">Movies & Ratings</div>
        <div style={{ display: 'flex', height: '10%', width: '100%', borderBottom: '1px solid black', justifyContent: 'space-around'}}>
          <div className="DictItemCenterLong" style={{alignSelf: 'end', fontWeight: '600'}}>Title</div>
          <div className="DictItemCenterShort" style={{alignSelf: 'end', fontWeight: '600'}}>Rating</div>
          <div className="DictItemCenter" style={{alignSelf: 'end', fontWeight: '600'}}>Genre</div>
          <div className="DictItemCenter"/>
        </div>

        {/* Mapper gennem film og viser dem */}
        {movies && (
          movies.map((movie, idx) => {
            if(movies[idx] != null) {
              return (
                <div key={idx} style={{ display: 'flex', height: '10%', width: '100%', borderBottom: '1px solid black', justifyContent: 'space-around'}}>
                  <input onChange={(e) => setTitle(e.target.value)} placeholder={movie["title"]} defaultValue={movie["title"]} className="DictItemCenterLong" />
                  <input onChange={(e) => setRating(e.target.value)} placeholder={movie["rating"]} defaultValue={movie["rating"]} className="DictItemCenterShort" />
                  <input onChange={(e) => setGenre(e.target.value)} placeholder={movie['genre']} defaultValue={movie['genre']} className="DictItemCenter"/>
                  <button onClick={() => updateMovies(idx, "title", title)} className="DictItemCenter">Change</button>
                </div>
              )
            }
          })
        )}
      </div>
    </div>
  )
}

// Eksporterer App-komponenten som standard eksport
export default App
