import {Avatar, Grid} from '@mui/material'
import React from 'react'
import {Icon} from './icon'

interface Props {
  src: string
}

export const GridIcon = ({src}: Props) => (
  <Grid item xs={6} md={4} lg={3}>
    <Icon src={src} />
  </Grid>
)
