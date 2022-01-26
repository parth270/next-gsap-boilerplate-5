import React from 'react';
import classes from './P.module.css';

const P=(props)=>{

    return(
        <p className={classes.p} style={{margin:props?.margin}} >
            {props.children}
        </p>
    );
}

export default P;