import { useAppSelector } from '.';
import { AuthorizationStatus } from '../components/const';
import { userSelectors } from '../store/slices/user';

export const useAuth = () => {
  const status = useAppSelector(userSelectors.userStatus);

  return status === AuthorizationStatus.Auth;
};
