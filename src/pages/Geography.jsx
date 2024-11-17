import React from 'react';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme';
import Header from '../components/Header';
import GeographyChart from '../components/GeographyChart';

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box margin="20px">
      <Header title="GEOGRAPHY CHART" subtile="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
