import React, { useState } from "react";
import { Tween } from "react-gsap";
import Routes from "../Routes/Routes";
import Title from "../Title/Title";
import classes from './Heading.module.css';

const Heading=({title,routes})=>{

    const [curr,setCurr]=useState(false);

    const clickHandler=()=>{
        setCurr(!curr);
    }

    return(
        <Tween from={{height:"22px"}} to={{height:!curr?"22px":""}} duration={0.5} >

        <div className={classes.container}>
            <Title click={clickHandler} curr={curr} title={title} />
            <Routes curr={curr} routes={routes} title={title} />
        </div>
        </Tween>
    );
}

export default Heading;