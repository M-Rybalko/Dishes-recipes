import React from 'react'
import Box from '@mui/material/Box';
import Header from './Header';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import heroText from '../constants';

const Hero = () => {
  return (
    <Box sx={{
      height: "500px",
      backgroundImage: `url("https://wallpaperaccess.com/full/1843875.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'multiply',
      backgroundColor: '#826045',
    }}>
      <Header />
      <Box sx={{
        display: 'block',
        width: "40%",
        color: '#fff',
        mt: "70px",
        ml: "50px"
      }}>
        <Typography variant="h1" sx ={{
          fontFamily: 'Tiempos',
          fontSize: 42,
        }}>Welcome to easydish!</Typography>
        <Typography>{`${heroText}`}</Typography>
        <Button variant="outlined" href="https://github.com/M-Rybalko" sx = {{
          color: "#fff",
          mt: "20px",
          borderColor: "#fff",
          '&:hover': {
            borderColor: "#826045",
            color: "#826045"
          }
        }}>Authors Github</Button>
      </Box>
    </Box>
  )
}

export default Hero