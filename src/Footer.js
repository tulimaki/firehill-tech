import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  withStyles
} from '@material-ui/core';
import {
  Email,
  Face,
} from '@material-ui/icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons'


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
        icon={<FontAwesomeIcon icon={faUserCircle} size="2x" />}
      />
      <BottomNavigationAction
        value="#contact"
        label="Contact"
        icon={<FontAwesomeIcon icon={faEnvelope} size="2x" />}
      />
      <BottomNavigationAction
        value={process.env.REACT_APP_MY_GITHUB || ""}
        label="GitHub"
        icon={<FontAwesomeIcon icon={faGithub} size="2x" />}
      />
      <BottomNavigationAction
        value={process.env.REACT_APP_MY_LINKEDIN || ""}
        label="LinkedIn"
        icon={<FontAwesomeIcon icon={faLinkedin} size="2x" />}
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
