import { Review } from '../../types/review';
import ReviewItem from '../review-item';

type TReviewListProps = {
  reviews: Review[];
};

function ReviewList({ reviews }: TReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          rating={review.rating}
          user={review.user}
          comment={review.comment}
          date={review.date}
        />
      ))}
    </ul>
  );
}

export default ReviewList;
