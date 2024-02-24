import { ChangeEvent } from 'react';

type TRatingInputProps = {
  defaultValue: number;
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  title: string;
};

function RatingInput({ defaultValue, onChange, title }: TRatingInputProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={defaultValue}
        id={`${defaultValue}-stars`}
        type="radio"
        onChange={onChange}
      />
      <label
        htmlFor={`${defaultValue}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default RatingInput;
