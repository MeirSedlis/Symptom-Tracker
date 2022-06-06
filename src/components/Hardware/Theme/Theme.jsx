import { createTheme, ThemeProvider } from '@mui/material';

const Theme = createTheme({
    palette: {
        primary: {
          light: '#7d918f',
          main: '#516362',
          dark: '#283938',
          contrastText: '#fff',
        },
        secondary: {
          light: '#e2d1c3',
          main: '#996c63',
          dark: '#694139',
          contrastText: '#000',
        },
      },
      typography: {
        fontFamily: 'Joan'
      }
})

export default Theme;


//Green theme
// light: '#8aa492',
// main: '#5d7564',
// dark: '#33493a',
// contrastText: '#fff',

//Brown theme
// light: '#916b71',
// main: '#634046',
// dark: '#38191f',
// contrastText: '#fff',