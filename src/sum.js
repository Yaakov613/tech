import React from 'react'
import classes from '../src/App.module.css'

const sum=(props)=>{
    return(
        <div onClick={props.clicked} className={classes.TestBox}>
            <p className={classes.Text}>{props.type}</p>
        </div>
    )
}

export default sum