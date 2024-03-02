import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './hooks';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import Pin from './assets/pin.svg';
import PinActive from './assets/pin-active.svg';

type TMapProps = {
  extraClassName?: string;
  city: City;
  points: Offer[];
  selectedPoint: Offer | null;
};

function Map({ extraClassName, city, points, selectedPoint }: TMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap({ city, mapRef });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: Pin,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: PinActive,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon:
                point.id === selectedPoint?.id
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [currentCustomIcon, defaultCustomIcon, map, points, selectedPoint]);

  return (
    <section
      style={{ height: 676 }}
      className={clsx('map', extraClassName)}
      ref={mapRef}
    />
  );
}

export default Map;
