import clsx from 'clsx';
import { Offer } from '../../types/offer';
import Card from '../card';
import { useState } from 'react';
import { SortOption } from '../const';
import PlacesListEmpty from '../places-list-empty/places-list-empty';
import Map from '../map';
import SortingList from '../sorting-list';
import { CityName } from '../../types/city';
import { useAppDispatch } from '../../hooks';
import { offersActions } from '../../store/slices/offers';

type TPlacesListProps = {
  extraClassName?: string;
  currentOffers: Offer[];
  currentCity: CityName;
};

function PlacesList({
  extraClassName,
  currentOffers,
  currentCity,
}: TPlacesListProps) {
  const [activeSort, setActiveSort] = useState(SortOption.Popular);
  const dispatch = useAppDispatch();

  const onCardHover = (evt: React.MouseEvent<HTMLElement>) => {
    const target = evt.currentTarget;
    const dataId = target.dataset.id ?? null;

    dispatch(offersActions.setActiveId(dataId));
  };

  const onCardLeave = () => {
    dispatch(offersActions.setActiveId(null));
  };

  const isEmpty = currentOffers.length === 0;
  let sortedOffers = currentOffers;

  switch (activeSort) {
    case SortOption.PriceHighToLow:
      sortedOffers = [...currentOffers].sort((a, b) => b.price - a.price);
      break;
    case SortOption.PriceLowToHigh:
      sortedOffers = [...currentOffers].sort((a, b) => a.price - b.price);
      break;
    case SortOption.TopRatedFirst:
      sortedOffers = [...currentOffers].sort((a, b) => b.rating - a.rating);
      break;
  }

  return isEmpty ? (
    <PlacesListEmpty />
  ) : (
    <div
      className={clsx(
        'cities__places-container container',
        isEmpty && 'cities__places-container--empty'
      )}
    >
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {sortedOffers.length} places to stay in {currentCity}
        </b>
        <SortingList setter={setActiveSort} current={activeSort} />
        <div className={clsx(extraClassName, 'places__list')}>
          {sortedOffers.map((item) => (
            <Card
              key={item.id}
              offer={item}
              onMouseOver={onCardHover}
              onMouseLeave={onCardLeave}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          extraClassName="cities__map"
          cityName={currentCity}
          points={currentOffers}
        />
      </div>
    </div>
  );
}

export default PlacesList;
