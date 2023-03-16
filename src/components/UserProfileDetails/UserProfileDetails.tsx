import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { ProfileSliceState } from '../../redux/profile/slice';
import { useAppDispatch } from '../../app/hooks';
import { updateUserProfile } from '../../redux/profile/operations';
import { TextareaAutosizeStyled } from './UserProfileDetails.styled';
import { toast } from 'react-toastify';

export const UserProfileDetails = ({
  profile,
}: {
  profile: ProfileSliceState;
}) => {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState<ProfileSliceState>({
    id: 0,
    firstName: '',
    lastName: '',
    description: '',
    avatar: '',
  });

  useEffect(() => {
    setValues(profile);
  }, [profile]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(updateUserProfile(values));
    toast.success('Profile successfully updated');
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <label htmlFor="description">Description</label>
                <TextareaAutosizeStyled
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                  minRows={4}
                  maxRows={4}
                  style={{ width: '100%' }}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
