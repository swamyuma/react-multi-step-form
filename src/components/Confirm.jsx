import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

function Confirm(props) {
  const {
    classes,
    values: { firstName, lastName, email, occupation, city, bio },
    nextStep,
    prevStep
  } = props;

  console.log(props.values);

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
            Confirm User Details
          </Typography>
        </Toolbar>
      </AppBar>

      <List>
        <ListItemText primary={"First Name"} secondary={firstName} />
        <ListItemText primary={"Last Name"} secondary={lastName} />
        <ListItemText primary={"Email"} secondary={email} />
        <ListItemText primary={"Occupation"} secondary={occupation} />
        <ListItemText primary={"City"} secondary={city} />
        <ListItemText primary={"Bio"} secondary={bio} />
      </List>
      <br />
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={continueNext}
      >
        Confirm & Continue
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={back}
      >
        Back
      </Button>
    </div>
  );
}

Confirm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Confirm);
