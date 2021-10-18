import React from 'react'
import {Box} from '@mui/material'
import ContentTabs from './content-tabs'
import NavTab from './tab'
import MailButton from './mail'

const NavBar = () => {
  return (
    <Box className={'nav'}>
      <NavTab className={'strike-through nav__content--larger'} text={'VANYO I.'} location={'/'} />
      <ContentTabs />
      <MailButton />
    </Box>
  )
}

export default NavBar
