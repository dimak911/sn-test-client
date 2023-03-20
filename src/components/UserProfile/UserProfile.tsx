import { ChangeEvent, FC, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { UserProfileProps } from '../../features/profile/Profile';
import { useAppDispatch } from '../../app/hooks';
import { updateUserProfileAvatar } from '../../redux/profile/operations';
import { toast } from 'react-toastify';

export const UserProfile: FC<UserProfileProps> = ({ profile }) => {
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) return;

    const result = await dispatch(updateUserProfileAvatar(file));

    if (result.meta.requestStatus === 'fulfilled') {
      toast.success('Avatar successfully uploaded');
    } else {
      toast.error('Avatar upload was failed');
    }
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Avatar
            src={profile.avatar?.url ?? ''}
            sx={{
              height: 80,
              mb: 2,
              width: 80,
            }}
          />
          <Typography gutterBottom variant="h5">
            {`${profile.firstName ?? ''} ${profile.lastName ?? ''}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
        <input type="file" onChange={handleFileChange} />
        <Button fullWidth variant="text" onClick={handleUploadClick}>
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};
