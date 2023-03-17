import { Suspense, FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from './SharedLayout.styled';
import { GlobalStyle } from '../GlobalStyle';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Button from '@mui/material/Button';
import { logout } from '../../redux/auth/operations';

const SharedLayout: FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'flex-start' }}>
            <>
              <Link to="/" end>
                Home
              </Link>
              {isLoggedIn && (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Link to="/profile">Profile</Link>
                  <Button
                    type="submit"
                    color="error"
                    variant="contained"
                    sx={{ ml: 2 }}
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              )}

              {!isLoggedIn && (
                <>
                  <Link to="/signin" end>
                    Sign In
                  </Link>
                  <Link to="/signup" end>
                    Sign Up
                  </Link>
                </>
              )}
            </>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </Box>
  );
};

export default SharedLayout;
