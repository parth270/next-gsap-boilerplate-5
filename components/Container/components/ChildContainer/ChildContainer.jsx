import React from "react";
import classes from './ChildContainer.module.css';

const ChildContainer=(props)=>{

    return(
    <div className={classes.container} >
        {props.children}
    </div>
    );
}
export default ChildContainer;