import React from 'react'
import {Box, useMediaQuery, useTheme} from '@mui/material'
import ContentTabs from './content-tabs'
import NavTab from './tab'
import MailButton from './mail'
import {NavDrawer} from './drawer'

const NavBar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className={'nav'}>
      {isMobile && <NavDrawer />}
      <NavTab className={'strike-through nav__content--larger'} text={'VANYO I.'} location={'/'} />
      {!isMobile && <ContentTabs />}
      <MailButton />
    </Box>
  )
}

export default NavBar
