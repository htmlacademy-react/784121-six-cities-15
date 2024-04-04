import clsx from 'clsx';
import { useEffect } from 'react';
import { SORT_OPTIONS, SortOption } from '../const';
import useBoolean from '../../hooks/use-boolean';

type TSortingListProps = {
  current: SortOption;
  setter: (option: SortOption) => void;
};

function SortingList({ current, setter }: TSortingListProps) {
  const { isOn, off, toggle } = useBoolean(false);

  const selectedOption = SORT_OPTIONS[current];

  useEffect(() => {
    if (isOn) {
      const onEscKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
          evt.preventDefault();
          off();
        }
      };

      document.addEventListener('keydown', onEscKeyDown);

      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
      };
    }
  }, [isOn, off]);

  return (
    <form className="places__sorting" action="#" method="get" onClick={toggle}>
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={clsx(
          'places__options places__options--custom',
          isOn && 'places__options--opened'
        )}
      >
        {SORT_OPTIONS.map((option, index) => (
          <li
            key={option}
            onClick={() => {
              setter(index);
            }}
            className={clsx(
              'places__option',
              selectedOption === option && 'places__option--active'
            )}
            tabIndex={0}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingList;
