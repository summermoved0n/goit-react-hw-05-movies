const API_KEY = 'bca00b9ffd93ea25185e7e4e149d031e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const POPULAR = 'trending/all/day';
const options = {
  method: 'GET',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2EwMGI5ZmZkOTNlYTI1MTg1ZTdlNGUxNDlkMDMxZSIsInN1YiI6IjY1OWQ3MDE4MjMxNjhjMDE0OTE4YmJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8gl9eklQfO5psef9tvqzllBAi4Zu-LhVXx8kFEuwEok',
};

export default class ServiceApi {
  async getFetchPopularMovie() {
    const url = `${BASE_URL}${POPULAR}?api_key=${API_KEY}`;

    const response = await fetch(url, options);
    if (!response.ok) {
      return Promise.reject(new Error('Oops, something went wrong! 😥'));
    }
    const data = await response.json();
    console.log(data);
    return data;
  }

  async getMovieByQuery(searchQuery) {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`;

    const response = await fetch(url, options);
    if (!response.ok) {
      return Promise.reject(new Error('Oops, something went wrong! 😥'));
    }
    const data = await response.json();
    console.log(data);
    return data;
  }

  async getMovieById(id) {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;

    const response = await fetch(url, options);
    if (!response.ok) {
      return Promise.reject(new Error('Oops, something went wrong! 😥'));
    }
    const data = await response.json();
    console.log(data);
    return data;
  }

  async getActorsById(id) {
    const url = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`;

    const response = await fetch(url, options);
    if (!response.ok) {
      return Promise.reject(new Error('Oops, something went wrong! 😥'));
    }
    const data = await response.json();
    console.log(data);
    return data;
  }

  async getReviewById(id) {
    const url = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`;

    const response = await fetch(url, options);
    if (!response.ok) {
      return Promise.reject(new Error('Oops, something went wrong! 😥'));
    }
    const data = await response.json();
    console.log(data);
    return data;
  }
}
