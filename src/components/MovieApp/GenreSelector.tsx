import React from 'react';
import { GenreSelectorProps } from '@/types/movieAppInterfaces';

const genreList = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Drama',
  'Family',
  'Fantasy',
  'Film-Noir',
  'History',
  'Horror',
  'Music',
  'Musical',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Thriller',
  'War',
  'Western'
];

const GenreSelector: React.FC<GenreSelectorProps> = ({ genre, handleGenreChange }) => (
  <div className="mb-4">
    <label htmlFor="genre" className="block text-sm font-medium text-white">Choose a genre:</label>
    <div className="grid grid-cols-3 gap-2 mt-2">
      {genreList.map((g) => (
        <button
          key={g}
          value={g}
          onClick={() => handleGenreChange({ target: { value: g } } as React.ChangeEvent<HTMLSelectElement>)}
          className={`py-2 px-4 rounded-md shadow ${genre === g ? 'bg-blue-700 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75`}
        >
          {g}
        </button>
      ))}
    </div>
  </div>
);

export default GenreSelector;


