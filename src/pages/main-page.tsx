import { useState } from 'react';
import Locations from '../components/locations/locations';
import Map from '../components/map';
import PlacesList from '../components/places-list';
import Sorting from '../components/sorting';
import { Offer } from '../types/offer';
import { useAppSelector } from '../hooks';
import NotFoundPage from './not-found-page';

function MainPage() {
  const [selectedPoint, setSelectedPoint] = useState<Offer | null>(null);
  const offers = useAppSelector((state) => state.offersByCurrentCity);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations />
      {offers.length > 0 ? (
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in Amsterdam
              </b>
              <Sorting />
              <PlacesList
                offers={offers}
                extraClassName="cities__places-list tabs__content"
                onCardHover={setSelectedPoint}
              />
            </section>
            <div className="cities__right-section">
              <Map
                extraClassName="cities__map"
                city={offers[0].city}
                points={offers}
                selectedPoint={selectedPoint}
              />
            </div>
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </main>
  );
}

export default MainPage;
