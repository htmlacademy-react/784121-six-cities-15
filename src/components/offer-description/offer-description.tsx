type TOfferDescriptionProps = {
  description: string;
};

function OfferDescription({ description }: TOfferDescriptionProps) {
  return (
    <div className="offer__description">
      <p className="offer__text">{description}</p>
    </div>
  );
}

export default OfferDescription;
