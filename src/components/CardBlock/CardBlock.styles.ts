import { SxProps, Theme } from '@mui/material/styles';

export const globalWpapper: SxProps<Theme> = {
  width: 1,
  background: "radial-gradient(circle, rgba(92,59,26,1) 10%, rgba(13,12,11,1) 100%)",
  p: "50px",
}

export const pagination: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: "50px",
  '& .MuiPaginationItem-root': {
    backgroundColor: "#f0c18d",
    '&:hover': {
      backgroundColor: "#ba966e",
    },
  },
  '& .Mui-selected': {
    backgroundColor: '#dea55f',
    '&:hover': {
      backgroundColor: "#dea55f",
    },
  },
}