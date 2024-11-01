// File: app/api/movies/route.ts
import { NextRequest, NextResponse } from 'next/server';
import moviesData from '@/data/imdb_top_1000.json';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const genre = searchParams.get('genre');

  if (genre) {
    const filteredMovies = moviesData.filter((m) => m.Genre.includes(genre));
    return NextResponse.json(filteredMovies);
  } else {
    return NextResponse.json({ message: 'Invalid genre parameter' }, { status: 400 });
  }
}
