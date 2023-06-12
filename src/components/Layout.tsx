import { ReactNode } from 'react';
import { Box, Paper } from '@mui/material';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: 4,
      }}>
      <Paper
        elevation={5}
        sx={{
          width: '100%',
          maxWidth: '900px',
          minHeight: '50vh',
          p: 4,
          pt: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
        }}>
        {children}
      </Paper>
    </Box>
  );
};
