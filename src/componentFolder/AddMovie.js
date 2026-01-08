function AddMovie ({ title, setTitle, rating, setRating, genre, setGenre, movies, setMovies }) {
  
  const addMovie = () => {
    const newMovie = { title: title, rating: rating, genre: genre }
    const updateMovies = [...movies, newMovie]
    setTitle('')
    setRating(null)
    setGenre("")
    setMovies(updateMovies)
  }

    return (

      <div className="InputBox">
        {/* Input-sektion til at tilføje nye film */}
        <div className="HeaderText">Add movies</div>
        <div style={{display: 'flex', justifyContent: 'start', alignItems: 'baseline', width: '90%', flexDirection:'column'}}>
          <input onChange={(e) => setTitle(e.target.value)} placeholder="Insert Title here" style={{width:'60%', border:'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%'}} />
          <input onChange={(e) => setRating(e.target.value)} placeholder="Insert Genre here" style={{width:'60%', border:'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%'}} />
          <input onChange={(e) => setGenre(e.target.value)} placeholder="Insert Rating here" style={{width:'25%', border:'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%'}} />
          <button onClick={() => addMovie()} style={{width:'50%', height:'40px', border:'1px solid black', fontSize: '15px', margin: '5%', justifyItems: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: '#61a4ad', color: 'white', fontSize: '15px'}}>Add movie</button>
        </div>
      </div>
  )
}


export default AddMovie