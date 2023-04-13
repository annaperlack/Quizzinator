import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#fec20e',
        },
        secondary: {
            main: '#0e4afe',
        },
        error: {
            main: '#fe4a0e',
        },
    },
});

export default theme;