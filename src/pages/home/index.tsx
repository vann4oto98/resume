import React from 'react'
import {Avatar, Box, Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import me from '../../assets/me.jpg'
import react_png from '../../assets/react.png'
import ts_png from '../../assets/typescript.png'
import js_png from '../../assets/javascript.png'
import ui5_png from '../../assets/ui5.png'
import rocket_png from '../../assets/rocket.png'
import godot_png from '../../assets/godot.png'
import {GridIcon} from '../../components/items/grid-icon'
import {TextItem} from '../../components/items/text-item'
import {Spacer} from '../../components/layouts/spacer'
import {HZLine} from '../../components/layouts/horizontal-line'
import {ItemLink} from '../../components/items/item-link'

const HomePage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

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
          <HZLine />
          <TextItem variant={'h4'}>
            I have worked with both backend and frontend technologies, but now I am focused mostly on the frontend as a
            <Typography variant={'h4'} color={'#00ADB5'}>
              React developer
            </Typography>
          </TextItem>
        </Box>
      </Grid>
      <Spacer top={isMobile ? '1rem' : '5rem'} />
      <GridIcon src={react_png} />
      <GridIcon src={ts_png} />
      <GridIcon src={js_png} />
      <GridIcon src={ui5_png} />
      <Spacer top={isMobile ? '1rem' : '5rem'} />
      <TextItem variant={'h3'}>How I started</TextItem>
      <HZLine />
      <Grid item xs={12} md={6}>
        <TextItem variant={'h5'}>
          My first inspiration to start programming were video games. I was very inpatient and started playing around
          with Unity and Godot while having zero programming experience. After failing, I realized that I need to first
          learn how to code. I had a hard time sticking to one programming language, I went through basic tutorials and
          played around for a bit. Later, I got recommended to try out SoftUni, as they had very interesting tasks to
          solve, so I signed for a few courses with Java.
        </TextItem>
      </Grid>
      <Grid item xs={12} md={6}>
        <Avatar sx={{width: '125px', height: '125px', margin: 'auto'}} src={godot_png} />
        <Avatar sx={{width: '125px', height: '125px', margin: 'auto'}} src={rocket_png} />
      </Grid>
      <Spacer top={'2rem'} />
      <Grid item xs={6} md={4}>
        <ItemLink variant={'h5'} href={'https://softuni.bg/Certificates/Details/77577/d6ecaeea'}>
          Java advanced
        </ItemLink>
      </Grid>
      <Grid item xs={6} md={4}>
        <ItemLink variant={'h5'} href={'https://softuni.bg/Certificates/Details/80557/0916cc8b'}>
          Java OOP
        </ItemLink>
      </Grid>
      <Grid item xs={6} md={4}>
        <ItemLink variant={'h5'} href={'https://softuni.bg/Certificates/Details/83884/610ce49a'}>
          Javascript advanced
        </ItemLink>
      </Grid>
    </Grid>
  )
}

export default HomePage
