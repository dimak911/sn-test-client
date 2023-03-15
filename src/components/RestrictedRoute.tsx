import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectIsLoggedIn } from '../redux/auth/selectors';

interface RestrictedRouteProps {
  component: JSX.Element;
  redirectTo?: string;
}

export const RestrictedRoute: FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
