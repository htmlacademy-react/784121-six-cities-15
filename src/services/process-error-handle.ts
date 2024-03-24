import { store } from '../store';
import { clearErrorAction } from '../store/api-actions';
import { offersActions } from '../store/slices/offers';

export const processErrorHandle = (message: string) => {
  store.dispatch(offersActions.setError(message));
  store.dispatch(clearErrorAction());
};
