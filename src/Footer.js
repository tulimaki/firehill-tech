import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  withStyles
} from '@material-ui/core';
import {
  Email,
  Face,
  GitHub,
  LinkedIn
} from '@material-ui/icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faPaypal
} from '@fortawesome/free-brands-svg-icons'

const styles = theme => ({
  footer: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
  },
})


function Footer(props) {
  const { classes } = props;
  return (
    <BottomNavigation
      value={null}
      onChange={(event, newValue) => {
        if (newValue.startsWith("https:")) {
          window.open(newValue, '_blank');
        } else {
          window.location = newValue
        }
      }}
      showLabels
      className={classes.footer}
    >
      <BottomNavigationAction
        value="#who"
        label="Who I am"
        icon={<Face></Face>}
      />
      <BottomNavigationAction
        value="#contact"
        label="Contact"
        icon={<Email></Email>}
      />
      <BottomNavigationAction
        value={process.env.REACT_APP_MY_GITHUB || ""}
        label="GitHub"
        icon={<GitHub></GitHub>}
      />
      <BottomNavigationAction
        value={process.env.REACT_APP_MY_LINKEDIN || ""}
        label="LinkedIn"
        icon={<LinkedIn></LinkedIn>}
      />
      <BottomNavigationAction
        value={process.env.REACT_APP_MY_PAYPAL || ""}
        label="PayPal.Me"
        icon={<FontAwesomeIcon icon={faPaypal} size="2x" />}
      />
    </BottomNavigation>
  );
}

export default withStyles(styles)(Footer);
