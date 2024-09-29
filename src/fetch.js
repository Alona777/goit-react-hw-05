import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTFiYjM4NjE3YjJjYjk0ZjE0MzBkNTc2OGU2NDJhZCIsIm5iZiI6MTcyNzY0NDQ2Mi45ODY0ODgsInN1YiI6IjY2ZjliZDJhNjIxZTg2MTZiNDVmODllNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U373A8KZYZeGMchKu0i_berOB7DtMUKCUohTgl4wAqk",
  },
});

export async function fetchTrendingMovies() {
  const response = await instance.get("/trending/movie/day");
  return response.data.results;
}

export async function searchMovies(query) {
  const response = await instance.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await instance.get(`/movie/${movieId}`);
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await instance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await instance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
}
