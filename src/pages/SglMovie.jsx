import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SglMovie() {
  const location = useLocation();
  const movieId = new URLSearchParams(location.search).get('id');
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  function HandleChange(id) {
    navigate(`/sglmovie/?id=${id}`);
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDcxNmY2ZWE4MmE5MDk3OTFhZDU2MzdkMGVjMzUxOSIsInN1YiI6IjY1NzE2MWU5ODg2MzQ4MDBlMzFhMDI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bBXJjzvujX6FCohfc5UlFk2BRaz3dv6PlkdslUidk1Q',
    },
  };
  const [movrec, setMovrec] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId, options]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
        options
      )
      .then((response) => {
        setMovrec(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId, options]);

  return (
    <div className="bg-cover w-screen h-screen" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})` }}>
      <div className="bg-gray-800 bg-opacity-50 p-8 mt-96">
        <h1 className="text-3xl font-bold mb-4">{movies.title}</h1>
        <h1 className="font-bold mb-4">{movies.overview}</h1>
        <p className="mb-2">Original Language: {movies.original_language}</p>
        <p className="text-lg mb-2">Rating: {movies.vote_average}</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Watchlist
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Add to Favorites
          </button>
        </div>
        <Carousel responsive={responsive}>
          {movrec &&
            movrec.map((mov) => (
              <div
                key={mov.id}
                
                className="w-[150px] h-[200px] hover:w-[160px] hover:shadow-slate-700 mx-4 my-6 rounded overflow-hidden shadow-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${mov.poster_path})` }}
              ></div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SglMovie;
