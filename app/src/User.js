import React from "react";

const User = (props) => {
  const { details } = props;
  return (
    <div>
      <div>{details.name}</div>
      <div>{details.email}</div>
      <div>{details.password}</div>
      <div>{details.terms}</div>
    </div>
  );
};

export default User;
