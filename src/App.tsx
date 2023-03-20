import { lazy, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { useAppSelector } from './app/hooks';
import { selectIsLoggedIn } from './redux/auth/selectors';

const HomePage = lazy(() => import('./pages/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const EmailVerifyPage = lazy(() => import('./pages/EmailVerifyPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

const App: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/signin"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<SignInPage />}
              />
            }
          />
          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<SignUpPage />}
                />
              ) : (
                <SignUpPage />
              )
            }
          />

          <Route
            path="/verify/:token"
            element={<EmailVerifyPage />}
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<ProfilePage />}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
