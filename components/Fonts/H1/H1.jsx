import React from "react";
import classes from "./H1.module.css";

const H1 = (props) => {
  return (
    <h1
      style={{
        margin: props?.margin,
        padding: props?.padding,
        borderBottom: `${props.Hr && "1px solid #000"}`,
      }}
      className={`${classes.h1} ${props.className}`}
    >
      {props.children}
    </h1>
  );
};

export default H1;