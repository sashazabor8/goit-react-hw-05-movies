import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { infoMovieByIdFetch } from 'api/api';
import BackBtn from 'components/BackBtn';
import s from './MovieDetailsPage.module.css';
// import Cast from 'views/Cast';
const Cast = lazy(() => import('views/Cast'));
// import Reviews from 'views/Reviews';
const Reviews = lazy(() => import('views/Reviews'));

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    infoMovieByIdFetch(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <BackBtn />
      {movie && (
        <>
          <article className={s.article}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              width="200"
              height="300"
              className={s.img}
            />
            <div className={s.container}>
              <h2 className={s.title}>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User Score: {roundNumber(movie.vote_average * 10)}%</p>
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
              <h3>Genres:</h3>
              <ul className={s.list}>
                {movie.genres.map((genre, index) => (
                  <li key={genre.id} className={s.item}>
                    {genre.name}
                    {index !== movie.genres.length - 1 ? ',' : '.'}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <section className={s.additionalContainer}>
            <h3 className={s.additionalTitle}>Additional information</h3>
            <ul className={s.additionalList}>
              <li className={s.additionalItem}>
                <NavLink to={`cast`} className={s.additionalLink}>
                  <p>Cast</p>
                </NavLink>
              </li>
              <li className={s.additionalItem}>
                <NavLink to={`reviews`} className={s.additionalLink}>
                  <p>Reviews</p>
                </NavLink>
              </li>
            </ul>
          </section>
          <Suspense fallback={<div></div>}>
            <Routes>
              <Route path={`cast`} element={<Cast />} />
              <Route path={`reviews`} element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;

function roundNumber(number) {
  if (number >= 0) {
    return Math.floor(number + 0.5);
  } else {
    return Math.ceil(number - 0.5);
  }
}
