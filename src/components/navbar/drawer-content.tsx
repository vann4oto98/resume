import React from 'react'
import {List, ListItem} from '@mui/material'
import NavTab from './tab'

export const DrawerContentList = () => {
  return (
    <List>
      <ListItem alignItems={'center'}>
        <NavTab className={'effect-underline'} text={'Experience'} location={'/experience'} />
      </ListItem>
      <ListItem alignItems={'center'}>
        <NavTab className={'effect-underline'} text={'Technologies'} location={'/technologies'} />
      </ListItem>
      <ListItem alignItems={'center'}>
        <NavTab className={'effect-underline'} text={'Contact'} location={'/contact'} />
      </ListItem>
    </List>
  )
}
