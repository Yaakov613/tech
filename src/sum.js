import React from 'react'
import classes from '../src/App.module.css'

const sum=(props)=>{
    return(
        <div className={classes.TestBox}>
            <p className={classes.Text}>{props.name}</p>
        </div>
    )
}

export default sum