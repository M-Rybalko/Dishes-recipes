import { SxProps, Theme } from '@mui/material/styles';

export const heroBackground: SxProps<Theme> = {
  height: "500px",
  backgroundImage: `url("https://wallpaperaccess.com/full/1843875.jpg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'multiply',
  backgroundColor: '#826045',
}

export const heroText: SxProps<Theme> = {
  display: 'block',
  width: "40%",
  color: "#fff",
  mt: "70px",
  ml: "50px",
}

export const headline: SxProps<Theme> = {
  fontFamily: 'Tiempos',
  fontSize: 42,
}

export const heroButton: SxProps<Theme> = {
  color: "#fff",
  mt: "20px",
  borderColor: "#fff",
  '&:hover': {
    borderColor: "#826045",
    color: "#826045"
  }
}