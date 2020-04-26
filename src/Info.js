import React from 'react';
import {
  List,
  ListItem,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  listItem: {
    justifyContent: 'center',
  }
})

function Info(props) {
  const { classes } = props;

  console.log(process.env.REACT_APP_MY_SKILLS)
  const who = (process.env.REACT_APP_MY_SKILLS || "").split('&')
  return (
    <List>
      {who.map(value => (
          <ListItem
            key={value}
            className={classes.listItem}
          >
            <Typography variant="body1">
              { value.trimLeft() }
            </Typography>
          </ListItem>
      ))}
    </List>
  );
}

export default withStyles(styles)(Info);
