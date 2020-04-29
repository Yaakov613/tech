import React from 'react'
import classes from '../src/App.module.css'

const sum = (props) => {
    let style=classes.TestBox
    if(props.symbol==='X'){
        style=classes.TestBoxX
    }
    if(props.symbol==='0'){
        style=classes.TestBox0
    }
    return (
        <div onClick={props.clicked}
            className={style}>
            <p className={classes.Text}>{props.type}</p>
        </div>
    )
}

export default sum