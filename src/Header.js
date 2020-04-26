import React from 'react';
import {
  Typography,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  header: {
    'font-size': '19.5vw',
    '@media (min-width: 960px)' : {
      'font-size': '195px'
    },
    'margin-block-start': '0',
    'margin-block-end': '0',
    'color': '#000000',
    'text-transform': 'uppercase',
    'padding': '0 0 0 0',
  },
  stripedDivider: {
    'height': '1em', 
    'background': 'repeating-linear-gradient(45deg, #000, #000 7px, #fff 7px, #fff 10px)',
    'margin-bottom': '1em',
  }
})

function Header(props) {
  const { classes } = props;
  return (
    <div>
      <Typography variant="h1" className={classes.header}>{ process.env.REACT_APP_MY_NAME }</Typography>
      <div className={classes.stripedDivider}></div>
    </div>
  );
}

export default withStyles(styles)(Header);
