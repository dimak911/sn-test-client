import { FC } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const PageNotFound: FC = () => {
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
        <h2>404</h2>
        <p>Page not found</p>
      </Box>
    </Container>
  );
};

export default PageNotFound;
