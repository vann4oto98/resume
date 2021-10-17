import {Box} from '@mui/material'
import React from 'react'
import NavTab from './tab'

const ContentTabs = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-center'}}>
      <NavTab text={'About me'} location={'/about'} />
      <NavTab text={'Experience'} location={'/experience'} />
      <NavTab text={'Contact'} location={'/contact'} />
    </Box>
  )
}

export default ContentTabs
