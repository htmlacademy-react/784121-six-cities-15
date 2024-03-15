import clsx from 'clsx';
import { SortType } from '../const';

type TSortingItemProps = {
  type: SortType;
};

function SortingItem({ type }: TSortingItemProps) {
  return (
    <li
      className={clsx('places__option', 'places__option--active')}
      tabIndex={0}
    >
      {type}
    </li>
  );
}

export default SortingItem;
