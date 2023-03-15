import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectIsLoggedIn } from '../redux/auth/selectors';

interface PrivateRouteProps {
  component: JSX.Element;
  redirectTo?: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  console.log('isLoggedIn: ', isLoggedIn);
  const shouldRedirect = !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
