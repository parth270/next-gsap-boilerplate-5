import React from "react";
import { Tween } from "react-gsap";
import classes from "./Bottom.module.css";

const Bottom = (props) => {
  return (
    <div className={classes.container} onClick={()=>{props.click();}} >
      <span>Menu</span>
      <Tween from={{rotate:"360"}} to={{rotate:props.curr?"180":"360"}} duration={0.5} >
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8.07571L9.53845 1.67383L17.0769 8.07571"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </Tween>
    </div>
  );
};

export default Bottom;
