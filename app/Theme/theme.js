import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#000',
          }),
        }),
      },
    },
  },
});

export default theme;