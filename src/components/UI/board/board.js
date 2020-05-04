import React from 'react'
import classes from './board.module.css'


const board = (props) => {
    return (
        <div className={classes.Board}>
            <h1>welcome to my naughts and crosses game!</h1>
            <h2>{props.firstPlayer} won {props.firstPlayerWins} games.</h2>
            <h2>{props.secondPlayer} won {props.secondPlayerWins} games.</h2>
            <h3>{props.currentPlayer} to play</h3>
            {props.children}
        </div>
    )
}
export default board