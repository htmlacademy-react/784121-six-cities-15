import { useAppSelector } from '../../hooks';
import { offersSelectors } from '../../store/slices/offers';
import './error-message.css';

function ErrorMessage() {
  const error = useAppSelector(offersSelectors.error);

  return error ? <div className="error-message">{error}</div> : null;
}

export default ErrorMessage;
