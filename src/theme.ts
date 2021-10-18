import {createTheme} from '@mui/material/styles'
import {red} from '@mui/material/colors'

//todo set up correct theme and learn how to use efficiently
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins sans-serif'
  },
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme
