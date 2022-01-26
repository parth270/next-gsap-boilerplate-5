import React from "react";
import classes from "./H2.module.css";

const H2 = (props) => {
  return (
    <h2
      style={{
        margin: props?.margin,
        padding: props?.padding,
        borderBottom: `${props.Hr && "1px solid #000"}`,
      }}
      className={`${classes.h2} ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export default H2;
