import {Typography} from '@mui/material'
import {useHistory} from 'react-router-dom'
import React from 'react'

interface TabProps {
  text: string
  location: string
}

const NavTab = (props: TabProps) => {
  const {text, location} = props
  const history = useHistory()

  const onClick = () => {
    history.push(`${location}`)
  }

  return (
    <Typography onClick={onClick} variant={'button'} sx={{marginRight: '2rem', cursor: 'pointer'}}>
      {text}
    </Typography>
  )
}

export default NavTab
