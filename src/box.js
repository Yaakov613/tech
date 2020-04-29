import React from 'react'
import classes from '../src/App.module.css'

const sum = (props) => {
    let style=null
    if(props.symbol==='X'){
        style=classes.TextX
    }
    if(props.symbol==='0'){
        style=classes.Text0
    }
    return (
        <div onClick={props.clicked}
            className={classes.TestBox}>
            <p className={style}>{props.type}</p>
        </div>
    )
}

export default sum