import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { reviewsMovieByIdFetch } from 'api/api';
import s from './Reviews.module.css';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    reviewsMovieByIdFetch(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={s.item}>
              <p className={s.authorTitle}>
                <span className={s.author}>Author:</span> {author}
              </p>
              <p className={s.reviewsTitle}>
                <span className={s.review}>Review:</span> {content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className={s.spareTitle}>
          oooops...there are no reviews for this movie.
        </h3>
      )}
    </>
  );
}

export default Reviews;
