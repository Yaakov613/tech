import React from 'react'
import classes from './winner.module.css'
import { Link } from 'react-router-dom'

const winner = (props) => {
    let decoration = classes.Banner
    if (props.draw) {
        decoration = classes.Banner2
    }
    // if (true) {
    //     setTimeout(() => {
    //         decoration=classes.Banner2
    //         console.log(decoration)
    //     }, 200);

    //     setTimeout(() => {
    //         decoration=classes.Banner
    //     }, 1000)
    //     setTimeout(() => {
    //         decoration=classes.Banner2
    //     }, 2000);
    //     setTimeout(() => {
    //         decoration=classes.Banner
    //     }, 4000)
    //     setTimeout(() => {
    //         decoration=classes.Banner2
    //     }, 6000);
    //     setTimeout(() => {
    //         decoration=classes.Banner
    //     }, 8000)
    //     setTimeout(() => {
    //         decoration=classes.Banner2
    //     }, 10000);
    // }
    return (
        <div className={decoration}>
            <h1 className={classes.Text}>
                {props.winner ? `well Done!! You ${props.name} have won the game!` : `you have drawn the game`}
            </h1>
            <Link to='/game'><button on className={classes.ResetButton} onClick={props.clicked}>play again</button></Link>
        </div>
    )
}

export default winner