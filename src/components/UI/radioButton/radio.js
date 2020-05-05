import React from 'react'
import classes from './radio.module.css'

const radio = (props) => {
    return (<div className={classes.Radio}>
        <button className={classes.Button} onClick={props.clicked}>{props.singlePlayer?'Multi-Player':'Single Player'}</button>
    </div>

    )
}

export default radio