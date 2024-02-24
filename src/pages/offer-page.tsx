import { useParams } from 'react-router-dom';
import NotFoundPage from './not-found-page';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../types/offer';
import Gallery from '../components/gallery';
import OfferName from '../components/offer-name';
import OfferFeatures from '../components/offer-features';
import OfferPrice from '../components/offer-price';
import OfferHost from '../components/offer-host';
import OfferDescription from '../components/offer-description';
import Reviews from '../components/reviews';
import Map from '../components/map';
import PlacesList from '../components/places-list';
import PremiumBadge from '../components/premium-badge';
import Rating from '../components/rating';
import OfferGoods from '../components/offer-goods';

type TOfferPageProps = {
  offers: Offer[];
};

function OfferPage({ offers }: TOfferPageProps) {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);

  return offer ? (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <section className="offer">
        <Gallery images={offer.images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            <PremiumBadge
              isPremium={offer.isPremium}
              extraClassName="offer__mark"
            />
            <OfferName title={offer.title} />
            <Rating rating={offer.rating} extraClassName="offer" />
            <OfferFeatures
              type={offer.type}
              bedrooms={offer.bedrooms}
              maxAdults={offer.maxAdults}
            />
            <OfferPrice price={offer.price} />
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <OfferGoods offer={offer} />
            </div>
            <OfferHost
              isPro={offer.host.isPro}
              avatarUrl={offer.host.avatarUrl}
              name={offer.host.name}
            />
            <OfferDescription description={offer.description} />
            <Reviews extraClassName="offer__reviews" />
          </div>
        </div>
        <Map extraClassName="offer__map" />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <PlacesList offers={offers} extraClassName="near-places__list" />
        </section>
      </div>
    </main>
  ) : (
    <NotFoundPage />
  );
}

export default OfferPage;
