import { ChangeEvent, FormEvent, useState } from 'react';
import { RATING, RequestStatus } from '../const';
import RatingInput from '../rating-input';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Spinner from '../spinner';
import { toast } from 'react-toastify';
import { reviewsActions, reviewsSelectors } from '../../store/slices/reviews';

function ReviewsForm({ offerId }: { offerId: string }) {
  const [userAnswer, setUserAnswer] = useState({
    stars: 0,
    description: '',
  });
  const dispatch = useAppDispatch();
  const commentStatus = useAppSelector(reviewsSelectors.reviewStatus);

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(
      reviewsActions.postComment({
        offerId,
        body: { comment: userAnswer.description, rating: userAnswer.stars },
      })
    );

    if (commentStatus === RequestStatus.Loading) {
      return <Spinner />;
    }

    if (commentStatus === RequestStatus.Success) {
      setUserAnswer({ stars: 0, description: '' });
      toast('Комментарий успешно отправлен!');
    }

    if (commentStatus === RequestStatus.Failed) {
      toast('Возникла ошибка при добавлении комментария!');
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {RATING.map((item) => (
          <RatingInput
            key={item.stars}
            value={item.stars}
            title={item.title}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
              setUserAnswer({ ...userAnswer, stars: Number(target.value) });
            }}
            checked={item.stars === userAnswer.stars}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userAnswer.description}
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setUserAnswer({ ...userAnswer, description: target.value });
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={commentStatus === RequestStatus.Loading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
