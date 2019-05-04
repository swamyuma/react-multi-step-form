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
  }
});

function FormUserDetails(props) {
  const { classes, nextStep, prevStep, values, handleChange } = props;
  const { occupation, city, bio } = values;
  console.log(values);

  const continueNext = e => {
    e.preventDefault();
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Form Personal Details
          </Typography>
        </Toolbar>
      </AppBar>
      <form className={classes.form}>
        <TextField
          className={classes.textField}
          value={occupation}
          onChange={e => handleChange(e)}
          label="Occupation"
          type="text"
          name="occupation"
          required
          autoComplete="off"
        />
        <br />
        <br />
        <TextField
          className={classes.textField}
          value={city}
          onChange={e => handleChange(e)}
          label="City"
          type="text"
          name="city"
          required
          autoComplete="off"
        />
        <br />
        <br />
        <TextField
          className={classes.textField}
          value={bio}
          onChange={e => handleChange(e)}
          label="Bio"
          type="text"
          name="bio"
          required
          autoComplete="off"
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
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={back}
        >
          Back
        </Button>
      </form>
    </div>
  );
}

FormUserDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormUserDetails);
