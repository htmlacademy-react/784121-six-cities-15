import { LOCATIONS } from '../const';

function Locations() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LOCATIONS.map((location) => (
            <li key={location} className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
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
