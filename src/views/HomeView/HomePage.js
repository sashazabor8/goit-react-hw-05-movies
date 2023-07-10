import { useState, useEffect } from 'react';
import { trendingMoviesFetch } from '../../api/api';
import ListMovies from 'views/ListMovies';

function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    trendingMoviesFetch().then(setMovies);
  }, []);

  return <>{movies && <ListMovies movies={movies} />}</>;
}

export default HomeView;
