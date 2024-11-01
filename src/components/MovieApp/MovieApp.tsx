
import React, { useState } from 'react';
import GenreSelector from '@/components/MovieApp/GenreSelector';
import MovieDisplay from '@/components/MovieApp/MovieDisplay';

import { Movie } from '@/types/movieAppInterfaces';

const MovieApp: React.FC = () => {
  const [genre, setGenre] = useState<string>('Action');
  const [movie, setMovie] = useState<Movie | null>(null);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => setGenre(e.target.value);

  const getRandomMovie = async () => {
    try {
      const response = await fetch(`/api/movies?genre=${genre}`);
      const data = await response.json();
      if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        setMovie(data[randomIndex]);
      } else {
        setMovie({
          Poster_Link: '',
          Series_Title: 'No movies found!',
          Released_Year: '',
          Genre: '',
          IMDB_Rating: 0,
          Overview: '',
          Director: '',
          Star1: '',
          Star2: '',
          Star3: '',
          Star4: '',
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMovie({
        Poster_Link: '',
        Series_Title: 'Error fetching data',
        Released_Year: '',
        Genre: '',
        IMDB_Rating: 0,
        Overview: '',
        Director: '',
        Star1: '',
        Star2: '',
        Star3: '',
        Star4: '',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Random Movie Suggestion</h1>
        <GenreSelector genre={genre} handleGenreChange={handleGenreChange} />
        <button
          onClick={getRandomMovie}
          className="w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded-md shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Get Random Movie
        </button>
        {movie && <MovieDisplay movie={movie} />}
      </div>
    </div>
  );
};

export default MovieApp;