import React from 'react'
import classes from './button.module.css'

const button = (props) => {
    return (
        <button className={classes.Button} onClick={props.clicked}>{props.name}</button>
    )
}

export default button