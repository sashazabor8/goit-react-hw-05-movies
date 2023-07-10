import { infoMovieByNameFetch } from 'api/api';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ListMovies from 'views/ListMovies';
import s from './MoviesPage.module.css';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const queryParamValue = queryParams.get('query');

    if (queryParamValue) {
      infoMovieByNameFetch(queryParamValue).then(setMovies);
      return;
    }
    setMovies(null);
  }, [search]);

  const onSubmitForm = e => {
    e.preventDefault();
    navigate(`${pathname}?query=${query}`);
    infoMovieByNameFetch(query).then(setMovies);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={onSubmitForm} className={s.form}>
        <input
          className={s.input}
          placeholder="Search movie"
          type="input"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>

      {movies && <ListMovies movies={movies} />}
    </>
  );
}

export default MoviesPage;
