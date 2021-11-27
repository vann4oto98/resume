import {Box, Typography} from '@mui/material'
import React from 'react'

interface TextItemProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: any
}

export const TextItem = ({variant, children}: TextItemProps) => {
  return (
    <Box sx={{p: 0.6, m: 0.6, display: 'flex'}}>
      <Typography variant={variant} color={'#EEEEEE'}>
        {children}
      </Typography>
    </Box>
  )
}
