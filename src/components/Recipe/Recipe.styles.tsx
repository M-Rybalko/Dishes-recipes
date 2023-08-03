import { SxProps, Theme } from '@mui/material/styles';

export const globalWrapper: SxProps<Theme> = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: "radial-gradient(circle, rgba(92,59,26,1) 10%, rgba(13,12,11,1) 100%)",
  color: "#ede0b9",
  pt: "50px",
  overflow: "auto",
}

export const dishName: SxProps<Theme> = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  fontSize: "40px",
  m: 0
}

export const dishCategory: SxProps<Theme> = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  fontSize: "20px",
  m: 0
}

export const tagBox: SxProps<Theme> = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
}

export const tag: SxProps<Theme> = {
  mr: "10px",
  mb: "20px",
  backgroundColor: "#dea55f",
}

export const contentWrapper: SxProps<Theme> = {
  justifyContent: "center",
  display: "flex",
  mx: "40px",
}

export const youtube: SxProps<Theme> = { 
  display: 'flex', 
  justifyContent: 'center',
  backgroundColor: "transparent",
  width: "33%",
  boxShadow: 0
}

export const infoHeader: SxProps<Theme> = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  textAlign: "center",
}

export const instructions: SxProps<Theme> = {
  display: "flex",
  textAlign: "center",
  mb: "30px",
}