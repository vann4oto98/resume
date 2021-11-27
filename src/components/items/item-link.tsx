import {Link} from '@mui/material'
import React from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

interface Props {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: any
  href: string
}

export const ItemLink = ({children, variant, href}: Props) => {
  return (
    <Link
      sx={{margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      onClick={() => window.open(href)}
      variant={variant}
      color={'#EEEEEE'}
    >
      {children}
      <ExitToAppIcon sx={{marginLeft: '1rem'}} />
    </Link>
  )
}
