import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFFFFF', // Cor primária do seu tema
        },
        secondary: {
            main: '#FF4949', // Cor secundária do seu tema
        },
        background: {
            default: '#212121', // Cor de fundo padrão
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#ECECEC',
        },
    },
});

export default darkTheme;