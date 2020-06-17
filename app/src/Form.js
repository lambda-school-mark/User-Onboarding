import React from "react";
const Form = (props) => {
  const { onInputChange, onCheckBoxChange, values, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={onInputChange}
        value={values.name}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={onInputChange}
        value={values.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={onInputChange}
        value={values.password}
      />
      ​
      <input
        type="checkbox"
        name="terms"
        id="terms"
        onChange={onCheckBoxChange}
      />
      <label htmlfor="terms">Agree to Terms of Service</label>
      <input type="submit" />
    </form>
  );
};
export default Form;
