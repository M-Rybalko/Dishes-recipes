import React from 'react'
import Box from '@mui/material/Box';
import Header from '../Header/Header';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as styles from './Hero.styles';

const Hero = () => {
  return (
    <Box sx={styles.heroBackground}>
      <Header />
      <Box sx={styles.heroText}>
        <Typography variant="h1" sx ={styles.headline}>Welcome to easydish!</Typography>
        <Typography>Easydish is a website designed for those who love cooking. Here you can find a vast variety of dishes from around the world and their recipes.</Typography>
        <Button variant="outlined" href="https://github.com/M-Rybalko" sx = {styles.heroButton}>Authors Github</Button>
      </Box>
    </Box>
  )
}

export default Hero