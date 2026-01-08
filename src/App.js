import React from 'react';
import {
  Box,
  Container,
  Typography
} from '@mui/material';
import Header from './Header.js';
import Info from './Info.js';
import Footer from './Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container 
          maxWidth="md" 
          sx={{ 
            backgroundColor: '#ffffff',
            marginBottom: '100px'
          }}
        > 
          <Header />
          <Box 
            display="flex" 
            flexDirection="column" 
            flex={1} 
            alignItems="center"
          >
            <Typography id="who" variant="h3">Who I am</Typography>
            <Info />
          </Box>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
