import {createTheme} from '@mui/material/styles'

// color palette chosen
//main #222831
//secondary #393E46
//highlight #00ADB5
//text #EEEEEE

//todo set up correct theme and learn how to use efficiently
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins sans-serif'
  },
  palette: {
    primary: {
      main: '#222831'
    },
    secondary: {
      main: '#393E46'
    },
    error: {
      main: '#3D0000'
    },
    info: {
      main: '#eeeeee'
    }
  }
})

// theme.typography.h2 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '2rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '3rem',
//   },
// };
export default theme
