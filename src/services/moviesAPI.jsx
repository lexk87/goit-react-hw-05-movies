import axios from 'axios';

const API_KEY = 'a2b23be55398d79ed0c58fbe13d82482';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const urls = {
    trendingMovies: 'trending/movie/day?',
    searchMovies: 'search/movie?',
    movieDetails: 'movie/',
    movieActors: 'movie/',
    movieReviews: 'movie/',
};

async function getMovieApi(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export function getTrendingMovies() {
    return getMovieApi(`${urls.trendingMovies}api_key=${API_KEY}`);
}

export function getSearchedMovie(searchQuery) {
    return getMovieApi(
        `${urls.searchMovies}api_key=${API_KEY}&query=${searchQuery}`
    );
}

export function getMovieDetails(id) {
    return getMovieApi(`${urls.movieDetails}${id}?api_key=${API_KEY}`);
}

export function getMovieActors(id) {
    return getMovieApi(`${urls.movieActors}${id}/credits?api_key=${API_KEY}`);
}

export function getMovieReviews(id) {
    return getMovieApi(`${urls.movieReviews}${id}/reviews?api_key=${API_KEY}`);
}
