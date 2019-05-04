import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

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

function UserForm() {
  const initState = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  const [formData, setFormData] = useState(initState);
  //const { styles } = styles;

  const nextStep = () => {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = formData;
    setFormData({
      step: step + 1,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    });
  };

  const prevStep = () => {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = formData;
    setFormData({
      step: step - 1,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    });
  };

  const handleChange = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { step, firstName, lastName, email, occupation, city, bio } = formData;
  const values = { firstName, lastName, email, occupation, city, bio };

  console.log(values);

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          values={values}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          prevStep={prevStep}
          nextStep={nextStep}
          values={values}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <Confirm prevStep={prevStep} nextStep={nextStep} values={values} />
      );
    case 4:
      return <Success values={values} />;
  }
}
export default withStyles(styles)(UserForm);
