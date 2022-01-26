import React, { useRef, useState } from "react";
import ChildContainer from "./components/ChildContainer/ChildContainer";
import Header from "./components/Header/Header";
import classes from "./Container.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Card/Card";
import Footer from "./components/Footer/Footer";

const Container = (props) => {

  return (
    <div className={classes.container}     >
      <Header />
      <ChildContainer>
        <Sidebar/>
        <Card>{props.children}</Card>
      </ChildContainer>
      <Footer/>
    </div>
  );
};

export default Container;