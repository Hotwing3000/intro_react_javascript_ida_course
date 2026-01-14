function AddMovie ({ title, setTitle, rating, setRating, genre, setGenre, movies, setMovies, addMovie }) {
  
  return (
    <div className="InputBox">
      {/* Input section to add new movies */}
      <div className="HeaderText">Add movies</div>
      <div className="input-section">
        <input onChange={(e) => setTitle(e.target.value)} placeholder="Insert Title here" className="input-field input-wide" />
        <input onChange={(e) => setRating(e.target.value)} placeholder="Insert Genre here" className="input-field input-wide" />
        <input onChange={(e) => setGenre(e.target.value)} placeholder="Insert Rating here" className="input-field input-narrow" />
        <button onClick={addMovie} className="add-movie-btn">Add movie</button>
      </div>
    </div>
  )
}

export default AddMovie