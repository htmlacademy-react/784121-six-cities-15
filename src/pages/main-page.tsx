import Locations from '../components/locations/locations';
import PlacesList from '../components/places-list';
import { useAppSelector } from '../hooks';
import { offersSelectors } from '../store/slices/offers';

function MainPage() {
  const offers = useAppSelector(offersSelectors.offers);
  const currentCity = useAppSelector(offersSelectors.city);

  const currentOffers =
    offers.filter((offer) => offer.city.name === currentCity) || [];

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations />

      <div className="cities">
        <PlacesList
          currentCity={currentCity}
          currentOffers={currentOffers}
          extraClassName="cities__places-list tabs__content"
        />
      </div>
    </main>
  );
}

export default MainPage;
