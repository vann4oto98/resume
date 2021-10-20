import React from 'react'
import {List, ListItem, ListItemIcon} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export const FooterIconsList = () => {
  return (
    <List>
      <ListItem alignItems={'center'}>
        <ListItemIcon>
          <GitHubIcon fontSize={'large'} color={'info'} />
        </ListItemIcon>
        <ListItemIcon>
          <LinkedInIcon fontSize={'large'} color={'info'} />
        </ListItemIcon>
      </ListItem>
    </List>
  )
}
