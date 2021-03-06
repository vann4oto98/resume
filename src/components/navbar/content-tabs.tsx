import {Box} from '@mui/material'
import React from 'react'
import NavTab from './tab'

const ContentTabs = () => {
  return (
    <Box className={'nav__content'}>
      <NavTab className={'effect-underline nav__item'} text={'Experience'} location={'/experience'} />
      <NavTab className={'effect-underline nav__item'} text={'Open source'} location={'/open-source'} />
      <NavTab className={'effect-underline nav__item'} text={'Contact'} location={'/contact'} />
    </Box>
  )
}

export default ContentTabs
