const KEY = 'bee84003116e0d7efbcdf8ada59f5536';
const BASE_URL = 'https://api.themoviedb.org';

async function baseFetchMovie(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function trendingMoviesFetch() {
  return baseFetchMovie(
    `${BASE_URL}/3/trending/movie/day?api_key=${KEY}&language=en-US`
  );
}

export function infoMovieByIdFetch(id) {
  return baseFetchMovie(
    `${BASE_URL}/3/movie/${id}?api_key=${KEY}&language=en-US`
  );
}

export function infoMovieByNameFetch(name) {
  return baseFetchMovie(
    `${BASE_URL}/3/search/movie?api_key=${KEY}&query=${name}&language=en-US`
  );
}

export function castMovieByIdFetch(id) {
  return baseFetchMovie(
    `${BASE_URL}/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
}

export function reviewsMovieByIdFetch(id) {
  return baseFetchMovie(
    `${BASE_URL}/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
}
