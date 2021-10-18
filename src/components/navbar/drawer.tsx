import React, {useState} from 'react'
import {Button, Drawer} from '@mui/material'
import NavTab from './tab'
import DehazeIcon from '@mui/icons-material/Dehaze'

export const NavDrawer = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <DehazeIcon className={'icon'} />
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <NavTab className={'effect-underline nav__item'} text={'About me'} location={'/about'} />
        <NavTab className={'effect-underline nav__item'} text={'Experience'} location={'/experience'} />
        <NavTab className={'effect-underline nav__item'} text={'Technologies'} location={'/technologies'} />
        <NavTab className={'effect-underline nav__item'} text={'Contact'} location={'/contact'} />
      </Drawer>
    </>
  )
}
