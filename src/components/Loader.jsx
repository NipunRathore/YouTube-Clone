import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

// this component renders a circular progress spinner at center of screen while data being loaded 
const Loader = () =>  (
  // uses box and stack components from MUI 
  // container element of miheight 95vh 
  // stack compoent is used to center the spinner both vertically and horizontally 
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      {/* spinner itself provided by circular progress component */}
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
