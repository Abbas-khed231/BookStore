import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#FFDEDE"),
    backgroundColor:"#FFDEDE",
    '&:hover': {
      backgroundColor:  "#FAF0E4",
    },
  }));


  export default function CustomizedButtons() {
    return (
      <Stack spacing={2} direction="row">
        <ColorButton variant="contained">Explore More Books</ColorButton>
      </Stack>
    );
  }
  