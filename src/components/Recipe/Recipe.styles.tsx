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
  m: 0,
  textAlign: "center"
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
  justifyContent: {
    xs: "center",
    md: "space-between"
  },
  display: {
    xs: "block",
    md: "flex"
  },
  mx: "40px",
  mt: "20px"
}

export const youtube: SxProps<Theme> = { 
  display: {
    xs: "block",
    md: "flex"
  },
  mr: {
    md: "40px"
  },
  justifyContent: 'center',
  backgroundColor: "transparent",
  width: "100%",
  boxShadow: 0
}

export const infoHeader: SxProps<Theme> = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  textAlign: "center",
  mt: {
    xs: "30px",
    md: 0
  }
}

export const instructions: SxProps<Theme> = {
  display: {
    xs: "block",
    md: "flex"
  },
  textAlign: "center",
}

export const backButton: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  color: "#ede0b9",
  mt: 0,
  borderColor: "#ede0b9",
  textDecoration: "none",
  '&:hover': {
    borderColor: "#826045",
    color: "#826045"
  }
}

export const buttonWrapper: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
}