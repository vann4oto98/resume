import React, {useState} from 'react'
import {Button, Drawer} from '@mui/material'
import NavTab from './tab'
import DehazeIcon from '@mui/icons-material/Dehaze'
import theme from '../../theme'

export const NavDrawer = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <DehazeIcon className={'icon'} />
      </Button>
      <Drawer
        className={'nav__drawer'}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.main,
            width: {
              xs: 300,
              sm: 500
            }
          }
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <NavTab className={'effect-underline nav__item'} text={'About me'} location={'/about'} />
        <NavTab className={'effect-underline nav__item'} text={'Experience'} location={'/experience'} />
        <NavTab className={'effect-underline nav__item'} text={'Technologies'} location={'/technologies'} />
        <NavTab className={'effect-underline nav__item'} text={'Contact'} location={'/contact'} />
      </Drawer>
    </>
  )
}
