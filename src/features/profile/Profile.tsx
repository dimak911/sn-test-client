import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useAppDispatch } from '../../app/hooks';
import { useParams } from 'react-router-dom';
import { getProfileById } from '../../redux/auth/operations';

const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [profile, setProfile] = useState('');

  useEffect(() => {
    if (id) {
      dispatch(getProfileById(id)).then((data) => {
        setProfile(data.payload);
      });
    }
  }, [id]);
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
        <p>{profile}</p>
      </Box>
    </Container>
  );
};

export default Profile;
