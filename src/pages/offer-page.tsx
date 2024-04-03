import { useParams } from 'react-router-dom';
import NotFoundPage from './not-found-page';
import { Helmet } from 'react-helmet-async';
import Gallery from '../components/gallery';
import OfferHost from '../components/offer-host';
import Reviews from '../components/reviews';
import Map from '../components/map';
import PremiumBadge from '../components/premium-badge';
import Rating from '../components/rating';
import OfferGoods from '../components/offer-goods';
import { useAppDispatch, useAppSelector } from '../hooks';
import { offersSelectors } from '../store/slices/offers';
import CardList from '../components/card-list';
import { offerActions, offerSelectors } from '../store/slices/offer';
import { reviewsActions, reviewsSelectors } from '../store/slices/reviews';
import { useEffect } from 'react';
import { RequestStatus } from '../components/const';
import Spinner from '../components/spinner';
import { Offer } from '../types/offer';

function OfferPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const currentCity = useAppSelector(offersSelectors.city);

  const offerPage = useAppSelector(offerSelectors.offer);
  const status = useAppSelector(offerSelectors.status);
  const nearbyOffers = useAppSelector(offerSelectors.nearbyOffers);
  const nearOffersAndCurrent = [offerPage, ...nearbyOffers] as Offer[];
  const reviews = useAppSelector(reviewsSelectors.reviews);

  useEffect(() => {
    Promise.all([
      dispatch(offerActions.fetchOffer(id as string)),
      dispatch(offerActions.fetchNearBy(id as string)),
      dispatch(reviewsActions.fetchComments(id as string)),
    ]);
  }, [dispatch, id]);

  if (status === RequestStatus.Loading) {
    return <Spinner />;
  }

  if (status === RequestStatus.Failed || !offerPage) {
    return <NotFoundPage />;
  }

  return offerPage ? (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <section className="offer">
        <Gallery images={offerPage.images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            <PremiumBadge
              isPremium={offerPage.isPremium}
              extraClassName="offer__mark"
            />
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offerPage.title}</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <Rating rating={offerPage.rating} extraClassName="offer" />
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offerPage.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offerPage.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {offerPage.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">${offerPage.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <OfferGoods offer={offerPage} />
            </div>
            <OfferHost
              isPro={offerPage.host.isPro}
              avatarUrl={offerPage.host.avatarUrl}
              name={offerPage.host.name}
            />
            <div className="offer__description">
              <p className="offer__text">{offerPage.description}</p>
            </div>
            <Reviews
              extraClassName="offer__reviews"
              reviews={reviews}
              offerId={offerPage.id}
            />
          </div>
        </div>
        <Map
          extraClassName="offer__map"
          cityName={currentCity}
          points={nearOffersAndCurrent}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>

          <CardList offers={nearbyOffers} extraClassName="near-places__list" />
        </section>
      </div>
    </main>
  ) : (
    <NotFoundPage />
  );
}

export default OfferPage;
