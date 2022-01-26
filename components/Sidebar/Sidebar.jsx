import Head from "next/head";
import React, { useState } from "react";
import Bottom from "./components/Bottom/Bottom";
import Heading from "./components/Heading/Heading";
import classes from "./Sidebar.module.css";
import { Tween } from "react-gsap";
import useWindow from "../../hook/useWindow";
import arr from "../../routes/arr";

const Sidebar = (props) => {
  const [curr, setCurr] = useState(false);

  const width = useWindow();

  const clickHandler = () => {
    setCurr(!curr);
  };

  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/bd122207f1.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Tween
        from={!(width > 450) ? { y: "100%" } : { y: 0 }}
        to={!(width > 450) ? { y: !curr ? "100%" : 0 } : { y: 0 }}
        duration={0.5}
      >
        <div className={classes["bg-container"]} id="a1">
          <div className={`${classes.container} ${classes.mobile}`}>
            <div className={classes["input-container"]}>
              <input type="text" placeholder="Search for something..." />
              <svg
                className={classes.svg}
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L7 7.5L2 13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </div>
            {arr.map((data)=>{
              return <Heading title={data.title} routes={data.routes} id={data.id} key={data.id} />
            })}   
          </div>
        </div>
      </Tween>
      <Bottom click={clickHandler} curr={curr} />
    </>
  );
};

export default Sidebar;
