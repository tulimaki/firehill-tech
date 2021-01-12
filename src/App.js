import React from 'react';
import ReactGA from "react-ga";
import {
  Box,
  Container,
  Typography,
  withStyles
} from '@material-ui/core';
import Header from './Header.js';
import Info from './Info.js';
import Contact from './Contact.js';
import Footer from './Footer.js';


const styles = theme => ({
  container: {
    'background-color': '#ffffff'
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);
    const { classes } = props;
    this.classes = classes
    this.state = {};
  }

  componentDidMount() {
    if (process.env.REACT_APP_GA_TRACKING_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  render() {
    return (
      <div>
        <Container maxWidth="md" className={this.classes.container}> 
          <Header />
          <Box display="flex" flexDirection="column" flex={1} alignItems="center">
            <Typography id="who" variant="h3">Who I am</Typography>
            <Info />
          </Box>
        </Container>
        <Footer />
      </div>
    );
  }
}


export default withStyles(styles)(App);
