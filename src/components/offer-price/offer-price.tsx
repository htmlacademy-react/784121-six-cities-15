type TOfferPriceProps = {
  price: number;
};

function OfferPrice({ price }: TOfferPriceProps) {
  return (
    <div className="offer__price">
      <b className="offer__price-value">${price}</b>
      <span className="offer__price-text">&nbsp;night</span>
    </div>
  );
}

export default OfferPrice;
