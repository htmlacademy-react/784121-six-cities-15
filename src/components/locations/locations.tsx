import clsx from 'clsx';
import { LOCATIONS, SortType } from '../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, fillOfferList, setSortType } from '../../store/action';

function Locations() {
  const currentCity = useAppSelector((state) => state.currentCity);
  const dispatch = useAppDispatch();

  const onCityClickHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const value = evt.target as HTMLElement;
    dispatch(changeCity(value.innerText));
    dispatch(fillOfferList());
    dispatch(setSortType(SortType.Popular));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LOCATIONS.map((location) => (
            <li key={location} className="locations__item">
              <a
                className={clsx(
                  'locations__item-link tabs__item',
                  location === currentCity && 'tabs__item--active'
                )}
                href="#"
                onClick={onCityClickHandler}
              >
                <span>{location}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Locations;
