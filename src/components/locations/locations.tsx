import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { LOCATIONS } from '../const';
import { useAppSelector } from '../../hooks';
import { changeCity, fillOfferList } from '../../store/action';

function Locations() {
  const currentCity = useAppSelector((state) => state.currentCity);
  const dispatch = useDispatch();

  const onCityClickHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const value = evt.target as HTMLElement;
    dispatch(changeCity(value.innerText));
    dispatch(fillOfferList());
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
