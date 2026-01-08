import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faFlickr,
  faGithub,
  faLinkedin,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons'

function Footer() {
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
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
      }}
    >
      <BottomNavigationAction
        value="#who"
        label="Who I am"
        icon={<FontAwesomeIcon icon={faUserCircle} size="2x" />}
      />
      <BottomNavigationAction
        value={"https://github.com/tulimaki"}
        label="GitHub"
        icon={<FontAwesomeIcon icon={faGithub} size="2x" />}
      />
      <BottomNavigationAction
        value={"https://www.flickr.com/photos/196716913@N06/"}
        label="Flickr"
        icon={<FontAwesomeIcon icon={faFlickr} size="2x" />}
      />
      <BottomNavigationAction
        value={"https://firehill.tech"}
        label="LinkedIn"
        icon={<FontAwesomeIcon icon={faLinkedin} size="2x" />}
      />
      <BottomNavigationAction
        value={"https://firehill.tech"}
        label="PayPal.Me"
        icon={<FontAwesomeIcon icon={faPaypal} size="2x" />}
      />
    </BottomNavigation>
  );
}

export default Footer;
