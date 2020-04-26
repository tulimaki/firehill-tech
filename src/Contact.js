import React from 'react';
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
  withStyles
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

const styles = theme => ({
  form: {
    padding: '2em 0 5em 0',
  },
  captcha: {
    'margin-top': '0.5em',
  },
  button: {
    margin: '2em 0 5em 0',
  },
})

function Contact(props) {
  const recaptchaRef = React.createRef();
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_MY_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_MY_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_MY_EMAILJS_USER_ID
    ).then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }

  const { classes } = props;
  return (
    <form className={classes.form} onSubmit={sendEmail}>
        <FormControl fullWidth={true}>
          <InputLabel
            htmlFor="contact-email"
          >
            Email address
          </InputLabel>
          <Input
            id="contact-email"
            name="email"
            aria-describedby="contact-email-helper-text"
          />
        </FormControl>
        <FormControl fullWidth={true}>
          <TextField
            id="contact-msg"
            name="message"
            label="Message"
            multiline rowsMax={10}
          />
        </FormControl>
        <FormControl
          fullWidth={true}
          className={classes.captcha}
        >
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || "123"}
            onChange={() => {}}
          />
        </FormControl>
        <FormControl fullWidth={true}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth={true}
            className={classes.button}
            endIcon={<Send></Send>}
          >
            Send
          </Button>
        </FormControl>
    </form>
  );
}

export default withStyles(styles)(Contact);
