import React from 'react'
import {Box} from '@mui/material'
import ContentTabs from './content-tabs'
import NavTab from './tab'

const NavBar = () => {
  return (
    <Box
      sx={{
        padding: '1rem',
        width: '100%',
        display: 'flex',
        //backgroundColor: '#EBE5E5',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <NavTab text={'VANYO I.'} location={'/'} />
      <ContentTabs />
      <NavTab text={'MAIL'} location={'/'} />
    </Box>
  )
}

export default NavBar
