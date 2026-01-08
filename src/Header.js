import React from 'react';
import {
  Typography
} from '@mui/material';

function Header() {
  return (
    <div>
      <Typography 
        variant="h1" 
        sx={{
          fontSize: '19.5vw',
          '@media (min-width: 960px)': {
            fontSize: '195px'
          },
          marginBlockStart: '0',
          marginBlockEnd: '0',
          color: '#000000',
          textTransform: 'uppercase',
          padding: '0 0 0 0',
        }}
      >
        Panu Tulimäki
      </Typography>
      <div 
        style={{
          height: '1em', 
          background: 'repeating-linear-gradient(45deg, #000, #000 7px, #fff 7px, #fff 10px)',
          marginBottom: '1em',
        }}
      ></div>
    </div>
  );
}

export default Header;
