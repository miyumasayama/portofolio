import {
  AppBar as MuiAppBar,
  Divider,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { FC, } from 'react';

const pages = ['About', 'Skills', 'History', 'Products'];

export const AppBar: FC = () => {
  return (
    <MuiAppBar
      elevation={0}
      position={'fixed'}
      sx={{
        maxHeight: 60,
        p: 0, 
        ':after': { display: 'none' },
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          minHeight: 60,
          backgroundColor: 'rgba(229, 171, 190, 0.5)',
          fontFamily: 'monospace',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'monospace',
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Miyu's Portfolio
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
      <Divider />
    </MuiAppBar>
  );
};