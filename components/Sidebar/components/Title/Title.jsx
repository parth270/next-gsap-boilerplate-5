import React from "react";
import { Tween } from "react-gsap";
import classes from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={classes["bg-container"]}>
      <div
        className={classes.container}
        onClick={() => {
          props.click();
        }}
      >
        <span>{props.title}</span>
        <Tween from={{rotate:"360"}} to={{rotate:props.curr?"180":"360"}} duration={0.5} >
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3848 2.11567L10.3079 9.82324L2.23096 2.11567"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </Tween>
      </div>
    </div>
  );
};
export default Title;
