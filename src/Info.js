import React from 'react';
import {
  List,
  ListItem,
  Typography
} from '@mui/material';

function Info() {
  const who = [
    "Web Developer, Full Stack",
    "Django, .NET, Flutter",
    "Python, VB, C#, Dart",
    "React, React Native",
    "HTML, CSS, JS",
    "AWS, Digital Ocean, Firebase, Heroku, Upcloud",
    "Git, GitHub",
    "Scrum, eCommerce, ERP, Logistics, Production",
  ]
  return (
    <List>
      {who.map(value => (
          <ListItem
            key={value}
            sx={{
              justifyContent: 'center',
            }}
          >
            <Typography variant="body1">
              { value.trimStart() }
            </Typography>
          </ListItem>
      ))}
    </List>
  );
}

export default Info;
