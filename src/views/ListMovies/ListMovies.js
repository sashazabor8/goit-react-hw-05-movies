import { Link } from 'react-router-dom';
import s from './ListMovies.module.css';

function ListMovies({ movies }) {
  return (
    <section className={s.section}>
      <ul className={s.list}>
        {movies.results.map(movie => (
          <li key={movie.id} className={s.item}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListMovies;
