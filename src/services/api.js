const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

// This function communicates with the API to get the details of a movie
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};
// This function allows to search for movies from API by a given query string.
export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
);
    const data = await response.json()
    return data.results
};
