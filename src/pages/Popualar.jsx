import React from 'react'
import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useLocation} from 'react-router-dom';

function Popualar() {
  console.log("popular")

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDcxNmY2ZWE4MmE5MDk3OTFhZDU2MzdkMGVjMzUxOSIsInN1YiI6IjY1NzE2MWU5ODg2MzQ4MDBlMzFhMDI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bBXJjzvujX6FCohfc5UlFk2BRaz3dv6PlkdslUidk1Q'
    }
  };

  const navigate = useNavigate();
const location = useLocation();
    console.log(location);
    const movie_id = new URLSearchParams(location.search).get("Id")

  const [movies, setMovies] = useState([]);
      useEffect(() => {
        axios
          .get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
          .then((response) => {
            
            setMovies(response.data.results); 
            
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      function HandleChange(id){
        navigate(`/sglmovie/?id=${id}`)
      }

  return (
    // <div className='bg-amber-300 min-h-screen py-8'>
    //   <Navbar />
    <div className="flex flex-wrap justify-center  min-h-screen bg-slate-800 ">
    {movies &&
      movies.map((movie) => (
        <div  onClick={()=>{HandleChange(movie.id)}} key={movie.id} className=" w-[150px] h-[200px] hover:w-[160px] hover:shadow-slate-700  mx-4 my-6 rounded overflow-hidden shadow-lg  bg-no-repeat bg-cover" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})` } }>
           <NavLink to = "/sglmovie" >
          {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="w-full h-64 object-cover" /> */}
          <div className="px-6 py-4 hidden">
            <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
            <p className="text-gray-700">{movie.overview}</p>
          </div>
          </NavLink>
        </div>
      ))}
  </div>
    // </div>
  );
}

export default Popualar