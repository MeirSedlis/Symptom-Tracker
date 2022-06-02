import { createTheme, ThemeProvider } from '@mui/material';

const Theme = createTheme({
    palette: {
        primary: {
          light: '#8aa492',
          main: '#5d7564',
          dark: '#33493a',
          contrastText: '#fff',
        },
        secondary: {
          light: '#a48c8a',
          main: '#755f5d',
          dark: '#493534',
          contrastText: '#fff',
        },
      },
      typography: {
        fontFamily: 'Lato'
      }
})

export default Theme;