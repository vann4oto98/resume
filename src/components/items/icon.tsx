import {Avatar, Box, Grid} from '@mui/material'
import React from 'react'

interface Props {
  src: string
}

export const Icon = ({src}: Props) => (
  <Avatar sx={{width: '100px', height: '100px', margin: 'auto'}} src={src} alt={'react.png'} />
)
