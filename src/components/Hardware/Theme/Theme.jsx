import { createTheme, ThemeProvider } from '@material-ui/core';

const Theme = createTheme({
    palette: {
        primary: {
          light: '#7094c2',
          main: '#406691',
          dark: '#063c63',
          contrastText: '#fff',
        },
        secondary: {
          light: '#f8b2b1',
          main: '#c48282',
          dark: '#925556',
          contrastText: '#000',
        },
      },
})

export default Theme;