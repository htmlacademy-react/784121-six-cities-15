import clsx from 'clsx';
import { LOCATIONS } from '../const';

function Locations() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LOCATIONS.map((location, idx) => (
            <li key={location} className="locations__item">
              <a
                className={clsx(
                  `locations__item-link tabs__item ${
                    idx === 3 && 'tabs__item--active'
                  }`
                )}
                href="#"
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
