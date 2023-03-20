import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { verifyEmailToken } from '../redux/auth/operations';
import { selectIsActivated } from '../redux/auth/selectors';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const EmailVerifyPage = () => {
  const { token } = useParams();
  const dispatch = useAppDispatch();
  const isActivated = useAppSelector(selectIsActivated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActivated) {
      setTimeout(() => {
        navigate('/signin');
      }, 5000);
    }
  }, [isActivated]);

  useEffect(() => {
    if (!token) {
      throw new Error('Token is missing');
    }

    dispatch(verifyEmailToken(token))
      .then((res) => {
        if (res.payload.statusCode) {
          toast.error(res.payload.message);
          return;
        }

        toast.success(res.payload.message);
      })
      .catch((e) => {
        console.log('error: ', e);
      });
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isActivated ? (
          <div>
            <h2>Email verified successfully</h2>
            <p>You will be redirected to sign in page in 5 seconds</p>
          </div>
        ) : (
          <div>Something is gone wrong!</div>
        )}
      </Box>
    </Container>
  );
};

export default EmailVerifyPage;
