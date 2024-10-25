import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'monospace',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});