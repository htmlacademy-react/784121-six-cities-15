import clsx from 'clsx';
import ReviewsForm from '../reviews-form';
import { Review } from '../../types/review';
import ReviewList from '../review-list';

type TReviewProps = {
  extraClassName?: string;
  reviews: Review[];
};

function Reviews({ extraClassName, reviews }: TReviewProps) {
  return (
    <section className={clsx('reviews', extraClassName)}>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewList reviews={reviews} />
      <ReviewsForm />
    </section>
  );
}

export default Reviews;
