export interface Movie {
    Poster_Link: string;
    Series_Title: string;
    Released_Year: string;
    Genre: string;
    IMDB_Rating: number;
    Overview: string;
    Director: string;
    Star1: string;
    Star2: string;
    Star3: string;
    Star4: string;
}

export interface MovieDisplayProps {
    movie: Movie;
}

export interface GenreSelectorProps {
    genre: string;
    handleGenreChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }