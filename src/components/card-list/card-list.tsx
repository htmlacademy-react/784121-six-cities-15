import clsx from 'clsx';
import { Offer } from '../../types/offer';
import Card from '../card';
import { useAppDispatch } from '../../hooks';
import { offersActions } from '../../store/slices/offers';
import { memo, useCallback } from 'react';

type TPlacesListProps = {
  extraClassName?: string;
  offers: Offer[] | null;
};

function CardList({ extraClassName, offers }: TPlacesListProps) {
  const dispatch = useAppDispatch();

  const onCardHover = useCallback(
    (evt: React.MouseEvent<HTMLElement>) => {
      const target = evt.currentTarget;
      const dataId = target.dataset.id ?? null;

      dispatch(offersActions.setActiveId(dataId));
    },
    [dispatch]
  );

  const onCardLeave = useCallback(() => {
    dispatch(offersActions.setActiveId(null));
  }, [dispatch]);

  return (
    <div className={clsx(extraClassName, 'places__list')}>
      {offers?.map((item) => (
        <Card
          key={item.id}
          offer={item}
          onMouseOver={onCardHover}
          onMouseLeave={onCardLeave}
        />
      ))}
    </div>
  );
}

export default memo(CardList);
