import React from "react";
import classes from "./H3.module.css";

const H3 = (props) => {
  return (
    <h3
      style={{
        margin: props?.margin,
        padding: props?.padding,
        borderBottom: `${props.Hr && "1px solid #000"}`,
      }}
      className={`${classes.h3} ${props.className}`}
    >
      {props.children}
    </h3>
  );
};

export default H3;
