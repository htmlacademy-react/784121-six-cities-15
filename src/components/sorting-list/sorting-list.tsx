import clsx from 'clsx';
import { useState } from 'react';
import { SortType } from '../const';
import SortingItem from '../sorting-item';
import { Offer } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortType } from '../../store/action';
import { getOffersBySortType } from './helpers';

type TSortingProps = {
  handleSortingItemClick: (offers: Offer[]) => void;
  initialOffers: Offer[];
};

function SortingList({ handleSortingItemClick, initialOffers }: TSortingProps) {
  const [isOpened, setOpen] = useState(false);
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  const onSortListOpenClick = (evt: React.MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLElement;

    if (target.closest('.places__sorting') && target.tagName !== 'LI') {
      setOpen((prevState) => !prevState);
    }

    if (target.tagName === 'LI') {
      const currentSort = target.textContent as SortType;

      setOpen(false);
      dispatch(setSortType(currentSort));
      getOffersBySortType({
        cb: handleSortingItemClick,
        sortType: currentSort,
        initialOffers,
      });
    }
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={onSortListOpenClick}
    >
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={clsx(
          'places__options places__options--custom',
          isOpened && 'places__options--opened'
        )}
      >
        {Object.entries(SortType).map(([key, value]) => (
          <SortingItem key={key} type={value} />
        ))}
      </ul>
    </form>
  );
}

export default SortingList;
