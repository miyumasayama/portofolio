import { navigations } from '@/utils/home';
import {
  AppBar as MuiAppBar,
  Divider,
  Toolbar,
  Typography,
  Box,
} from '@mui/material';
import { FC, } from 'react';
import { Navigation } from '../footer/fragments/navigation';

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
        <Box sx={{display: "flex", gap: 2}}>
         {navigations.map((navigation) => {
            const {href, name} = navigation
            return (<Navigation key={name} href={href} title={name} />)
          })}
        </Box>
      </Toolbar>
      <Divider />
    </MuiAppBar>
  );
};