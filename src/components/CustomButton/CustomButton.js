import React from "react";
import classes from "./CustomButton.module.css";

const CustomButton = (props) => {
  return (
    <button
      className={`${classes.customButton} ${props.btnClass}`}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
