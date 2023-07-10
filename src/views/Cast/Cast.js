import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { castMovieByIdFetch } from 'api/api';
import s from './Cast.module.css';

function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    castMovieByIdFetch(movieId).then(({ cast }) => setActors(cast));
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul className={s.list}>
          {actors
            .filter(actor => actor.profile_path)
            .map(({ cast_id, name, character, profile_path }) => (
              <li key={cast_id} className={s.item}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                  className={s.img}
                />
                <div className={s.container}>
                  <p className={s.name}>{name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export default Cast;
