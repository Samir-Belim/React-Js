import React, { useState } from 'react'
import { movies } from './data'

const Movies = () => {
  const [movieslist,setMovieslist]=useState(movies);
  const filterByCategory=(cat)=>{
    setMovieslist(movies.filter((data)=>data.category==cat));
  }
    return (
      <>
      <div className='buttons'>
          <button onClick={()=>setMovieslist(movies)}>All</button>
          <button onClick={()=>filterByCategory("Action")}>Action</button>
          <button onClick={()=>filterByCategory("Thriller")}>Thriller</button>
          <button onClick={()=>filterByCategory("Drama")}>Drama</button>
          <button onClick={()=>filterByCategory("Sci-Fi")}>Sci-Fi</button>
          <button onClick={()=>filterByCategory("Horror")}>Horror</button>
          <button onClick={()=>filterByCategory("Animation")}>Animation</button>
      </div>
      <div className='container'>
   {movieslist.map((data)=>(
    <div key={data.id} style={{maxWidth:"280px"}} className='poster'>
      <div className='movies'>
        <img src={data.poster_path} alt="" style={{height:"200px",width:"280px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
        </div>
        <h5>{data.title}</h5>
        <p>{data.release_date}</p>
    </div>
   ))}
      </div>
      </>
  );
}

export default Movies