import axios from "axios";
import type { Movie } from "../types/movie";

interface GetMovieresResponse {
  results: Movie[];
}

export default async function fetchMovies(name: string): Promise<Movie[]> {
  const response = await axios.get<GetMovieresResponse>(
    `https://api.themoviedb.org/3/search/movie?query=${name}`,
    {
      params: {},
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );
  return response.data.results;
}
