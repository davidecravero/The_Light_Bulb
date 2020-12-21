import React from "react";

const Button = ({ whenClicked, value }) => {
  return <a onClick={() => whenClicked()}> {value}</a>;
};

export default Button;
