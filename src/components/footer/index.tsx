import React from 'react'
import {AppBar, Typography} from '@mui/material'
import {GitHub, LinkedIn} from '@mui/icons-material'

const Footer = () => {
  return (
    <AppBar position={'sticky'} color={'secondary'} className={'nav'}>
      <GitHub className={'clickable'} sx={{mr: 4}} onClick={() => window.open('https://github.com/vann4oto98')} />
      <LinkedIn
        className={'clickable'}
        onClick={() => window.open('https://www.linkedin.com/in/vanyo-ivanov-1351ba1aa/')}
      />
      <Typography sx={{width: '100%'}} align={'right'}>
        Vanyo Ivanov
      </Typography>
    </AppBar>
  )
}

export default Footer
