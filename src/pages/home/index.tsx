import React from 'react'
import {Avatar, Box, Grid, Typography} from '@mui/material'
import me from '../../assets/me.jpg'
import react_png from '../../assets/react.png'
import ts_png from '../../assets/typescript.png'
import js_png from '../../assets/javascript.png'
import ui5_png from '../../assets/ui5.png'
import {IconItem} from '../../components/items/icon-item'
import {TextItem} from '../../components/items/text-item'

const HomePage = () => {
  return (
    <Grid container padding={'5rem'}>
      <Grid item xs={12} md={6}>
        <Box sx={{display: 'flex', height: '100%', justifyContent: 'center'}}>
          <Avatar sx={{width: '200px', height: '200px', margin: 'auto'}} src={me} alt={'me.jpg'} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} spacing={5}>
        <Box sx={{flexWrap: 'wrap', display: 'flex', flexDirection: 'column'}}>
          <TextItem variant={'h3'}>I am a junior developer with a year of professional experience.</TextItem>
          <TextItem variant={'h4'}>
            I have worked with both backend and frontend technologies, but now I am focused mostly on the frontend as a
            <Typography variant={'h4'} color={'#03D1F7'}>
              React developer
            </Typography>
          </TextItem>
        </Box>
      </Grid>
      <IconItem src={react_png} />
      <IconItem src={ts_png} />
      <IconItem src={js_png} />
      <IconItem src={ui5_png} />
    </Grid>
  )
}

export default HomePage
