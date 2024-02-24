type TOfferNameProps = {
  title: string;
};

function OfferName({ title }: TOfferNameProps) {
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">{title}</h1>
      <button className="offer__bookmark-button button" type="button">
        <svg className="offer__bookmark-icon" width={31} height={33}>
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
}

export default OfferName;
