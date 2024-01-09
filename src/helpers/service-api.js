const API_KEY = 'bca00b9ffd93ea25185e7e4e149d031e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const POPULAR = 'trending/all/day';

export default class ServiceApi {
  async getFetchPopularMovie() {
    const url = `${BASE_URL}${POPULAR}?api_key=${API_KEY}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2EwMGI5ZmZkOTNlYTI1MTg1ZTdlNGUxNDlkMDMxZSIsInN1YiI6IjY1OWQ3MDE4MjMxNjhjMDE0OTE4YmJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8gl9eklQfO5psef9tvqzllBAi4Zu-LhVXx8kFEuwEok',
      });

      if (!response.ok) {
        throw new Error('Response error');
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
