import React, { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TextField } from "@material-ui/core";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { firstName, lastName, email } = formData;
  console.log(formData);

  return (
    <form>
      <TextField
        value={firstName}
        onChange={e => updateFormData(e)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <br />
      <TextField
        value={lastName}
        onChange={e => updateFormData(e)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <br />
      <TextField
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
