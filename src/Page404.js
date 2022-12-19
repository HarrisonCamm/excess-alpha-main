import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '75vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography paddingBottom={2} variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" href='/'>Back Home</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}