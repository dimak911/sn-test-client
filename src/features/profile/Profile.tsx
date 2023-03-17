import { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { UserProfile } from '../../components/UserProfile/UserProfile';
import { UserProfileDetails } from '../../components/UserProfileDetails/UserProfileDetails';
import { selectProfile } from '../../redux/profile/selectors';
import { getUserProfile } from '../../redux/profile/operations';
import { ProfileSliceState } from '../../redux/profile/slice';

export type UserProfileProps = {
  profile: ProfileSliceState;
};

const Profile: FC = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                  <UserProfile profile={profile} />
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                  <UserProfileDetails profile={profile} />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
