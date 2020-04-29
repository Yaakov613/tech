import React from 'react'
import classes from './winner.module.css'

const winner = (props) => {
    let decoration= classes.Banner
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
    console.log(decoration)
    return (
        <div className={decoration}>
            <h1 className={classes.Text}>well Done!! You {props.name} have won the game!</h1>
        </div>
    )
}

export default winner