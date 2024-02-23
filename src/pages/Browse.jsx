import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation} from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


function Browse() {
    const[movies,setMovies] = useState([])
    const[query,setQuery] = useState('')
    
    const navigate = useNavigate();
    const location = useLocation();
        console.log(location);
        const movie_id = new URLSearchParams(location.search).get("Id")   


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDcxNmY2ZWE4MmE5MDk3OTFhZDU2MzdkMGVjMzUxOSIsInN1YiI6IjY1NzE2MWU5ODg2MzQ4MDBlMzFhMDI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bBXJjzvujX6FCohfc5UlFk2BRaz3dv6PlkdslUidk1Q'
        }
      };

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
            .then((response)=>
            {
                setMovies(response.data.results);
                console.log(response.data.results);
            })
            .catch((error) => {
                console.log(error);
              });
    },[query])
    const handleValue = (event) => {
        setQuery(event.target.value);
      };

      function HandleChange(id){
        navigate(`/sglmovie/?id=${id}`)
      }
    

  return (
    <div className='bg-slate-800 bg-cover w-screen min-h-screen'>
     
  
  <div className='m-20 flex justify-center bg-slate-500 h-10 w-[250px] rounded p-4 pb-2 gap-2'>
    <div className='text-neutral-600'><FaSearch/></div>
    <div ><a data-tooltip-id="my-tooltip" data-tooltip-content="Search the movie here"><input type='text'  className='mb-4 border-white border-hidden bg-slate-500' onChange={handleValue}  value={query}></input></a></div>
  </div>
  {/* <div> <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
  ◕‿‿◕
     </a></div> */}
     <Tooltip id="my-tooltip" />
  <div className="flex flex-wrap justify-center  min-h-screen bg-slate-800 ">
    {movies &&
      movies.map((movie) => (
        <div   key={movie.id} onClick={()=>{HandleChange(movie.id)}} className=" w-[150px] h-[200px] hover:w-[160px] hover:shadow-slate-700  mx-4 my-6 rounded overflow-hidden shadow-lg  bg-no-repeat bg-cover" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})` } }>
           
          {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="w-full h-64 object-cover" /> */}
          <div className="px-6 py-4 hidden">
            <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
            <p className="text-gray-700">{movie.overview}</p>
          </div>
         
        </div>
          ))}
          </div>
    </div>
  )
}

export default Browse