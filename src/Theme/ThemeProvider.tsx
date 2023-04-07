import {purple} from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

type ThemeProps = {
    children:React.ReactNode
}
const theme = createTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
main: purple[400],
    },
  },
});


export function Theme({children}:ThemeProps) {

  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
}
