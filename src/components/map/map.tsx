import clsx from 'clsx';

type TMapProps = {
  extraClassName?: string;
};

function Map({ extraClassName }: TMapProps) {
  return <section className={clsx('map', extraClassName)} />;
}

export default Map;
