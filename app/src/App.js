import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import "./App.css";
import Form from "./Form";
import formValidation from "./formValidation";

function App() {
  const initialFormValues = {
    name: "",
    email: "",
    password: "",

    terms: false,
  };

  const initialUsers = [];

  // const initialUsers = [
  //   {
  //     name: "Timbo",
  //     email: "timboz@gmial.com",
  //     password: "broWhat",
  //   },
  // ];

  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState(initialUsers);
  const [formErrors, setFormErrors] = useState([]);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    Yup.reach(formValidation, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckBoxChange = (event) => {
    const { name, checked } = event.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,

      terms: formValues.terms,
    };

    // setUsers({

    // })
  };

  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        onCheckBoxChange={onCheckBoxChange}
        onSubmit={onSubmit}
        values={formValues}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
