import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <p className={classes.top}>versal</p>
      <p className={classes.bottom}>
        A design system and code repository for HIGHWAY Magazine
      </p>
    </div>
  );
};

export default Header;
