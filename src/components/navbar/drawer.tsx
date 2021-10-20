import React, {useState} from 'react'
import {Button, Drawer, List, ListItem, ListItemButton} from '@mui/material'
import DehazeIcon from '@mui/icons-material/Dehaze'
import CloseIcon from '@mui/icons-material/Close'
import theme from '../../theme'
import {FooterIconsList} from './footer-icons'
import {DrawerContentList} from './drawer-content'

export const NavDrawer = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <DehazeIcon color={'info'} className={'icon'} />
      </Button>
      <Drawer
        className={'nav__drawer'}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.main,
            width: {
              xs: 200,
              sm: 500
            }
            //alignItems: 'center'
          }
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItem>
            <ListItemButton disableGutters={true} onClick={() => setOpen(false)}>
              <CloseIcon color={'info'} />
            </ListItemButton>
          </ListItem>
        </List>
        <DrawerContentList />
        <FooterIconsList />
      </Drawer>
    </>
  )
}
