import React from 'react'
import {List, ListItem, ListItemIcon} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export const FooterIconsList = () => {
  return (
    <List>
      <ListItem alignItems={'center'}>
        <ListItemIcon>
          <GitHubIcon
            className={'clickable'}
            fontSize={'large'}
            color={'info'}
            onClick={() => window.open('https://github.com/vann4oto98')}
          />
        </ListItemIcon>
        <ListItemIcon>
          <LinkedInIcon
            className={'clickable'}
            fontSize={'large'}
            color={'info'}
            onClick={() => window.open('https://www.linkedin.com/in/vanyo-ivanov-1351ba1aa/')}
          />
        </ListItemIcon>
      </ListItem>
    </List>
  )
}
