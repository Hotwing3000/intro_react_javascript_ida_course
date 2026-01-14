function MovieRatings ({ title, setTitle, rating, setRating, genre, setGenre, movies, updateMovies}) {


    return (

      <div className="List"> {/* List section to display existing movies */}
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
                  <button onClick={() =>  updateMovies(idx, "title", title)} className="DictItemCenterShort">Change</button>
                </div>
              )
            }
          })
        )}
      </div>
        
    ) 
}

export default MovieRatings