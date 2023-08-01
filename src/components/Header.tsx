import React from 'react'
import Box from '@mui/material/Box';
import '@fontsource/roboto/700.css';

const Header = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      width: '100%',
      height: 100,
      bgcolor: 'transparent',
      borderBottom: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'Fantasi, serif',
      fontSize: 60,
      letterSpacing: 2,
    }}>
      easydish
    </Box>
  )
}

export default Header