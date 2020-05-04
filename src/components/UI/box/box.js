import React from 'react'
import classes from './box.module.css'

const box = (props) => {
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

export default box