import React from 'react';
import { MovieDisplayProps } from '@/types/movieAppInterfaces';
import Image from 'next/image';

const MovieDisplay: React.FC<MovieDisplayProps> = ({ movie }) => (
    <div className="mt-6 text-white">
        <h2 className="text-xl font-semibold">{movie.Series_Title}</h2>
        <p className="text-gray-400">Year: {movie.Released_Year}</p>
        <p className="text-gray-400">Genre: {movie.Genre}</p>
        <p className="text-gray-400">IMDB Rating: {movie.IMDB_Rating}</p>
        <p className="text-gray-400">Director: {movie.Director}</p>
        <p className="text-gray-400">Stars: {movie.Star1}, {movie.Star2}, {movie.Star3}, {movie.Star4}</p>
        <p className="text-gray-400 mt-2">{movie.Overview}</p>
  </div>
);

export default MovieDisplay;