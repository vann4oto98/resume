import {createTheme} from '@mui/material/styles'
import {red} from '@mui/material/colors'

const theme = createTheme({
  typography: {},
  palette: {
    primary: {
      main: '#EBE5E5',
      contrastText: '#4B525C'
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
