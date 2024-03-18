import clsx from 'clsx';
import { CITIES } from '../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CityName } from '../../types/city';
import { offersActions, offersSelectors } from '../../store/slices/offers';

function Locations() {
  const currentCity = useAppSelector(offersSelectors.city);
  const dispatch = useAppDispatch();

  const onCityClickHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const value = evt.target as HTMLElement;
    dispatch(offersActions.changeCity(value.innerText as CityName));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city.name} className="locations__item">
              <a
                className={clsx(
                  'locations__item-link tabs__item',
                  city.name === currentCity && 'tabs__item--active'
                )}
                href="#"
                onClick={onCityClickHandler}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Locations;
