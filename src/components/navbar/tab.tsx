import {Typography} from '@mui/material'
import {useHistory} from 'react-router-dom'
import React from 'react'

interface TabProps {
  text: string
  location: string
  className?: string
}

const NavTab = (props: TabProps) => {
  const {text, location, className} = props
  const history = useHistory()

  const onClick = () => {
    history.push(`${location}`)
  }

  return (
    <Typography className={`clickable ${className}`} onClick={onClick} color={'#EEEEEE'} variant={'button'}>
      {text}
    </Typography>
  )
}

export default NavTab
