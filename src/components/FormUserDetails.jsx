import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TextField } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 8,
    width: 400
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  form: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 100,
    marginBottom: 100
  },
  button: {
    marginLeft: 100
  },
  palette: {
    primary: "#00cccc",
    secondary: {
      main: "#f44336"
    }
  }
});

function FormUserDetails(props) {
  const { classes, nextStep, values, handleChange } = props;
  const { firstName, lastName, email } = values;

  const continueNext = e => {
    e.preventDefault();
    //console.log(e.target.name, e.target.value);
    nextStep();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.palette}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Enter User Details
          </Typography>
        </Toolbar>
      </AppBar>
      <form className={classes.form}>
        <TextField
          className={classes.textField}
          value={firstName}
          onChange={e => handleChange(e)}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <br />
        <br />
        <TextField
          className={classes.textField}
          value={lastName}
          onChange={e => handleChange(e)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
        <br />
        <br />
        <TextField
          className={classes.textField}
          value={email}
          onChange={e => handleChange(e)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <br />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={continueNext}
        >
          Continue
        </Button>
      </form>
    </div>
  );
}

FormUserDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormUserDetails);
