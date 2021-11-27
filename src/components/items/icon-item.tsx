import {Avatar, Grid} from '@mui/material'
import React from 'react'

interface Props {
  src: string
}

export const IconItem = ({src}: Props) => (
  <Grid sx={{marginTop: '8rem'}} item xs={6} md={4} lg={3}>
    <Avatar sx={{width: '100px', height: '100px', margin: 'auto'}} src={src} alt={'react.png'} />
  </Grid>
)
