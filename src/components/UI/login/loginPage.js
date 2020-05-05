import React from 'react'
import classes from './login.module.css'
import RadioBtn from '../radioButton/radio'

const login = (props) => {
    return (
        <div className={classes.LoginForm}>
        <RadioBtn singlePlayer={!props.multiPlayer} clicked={props.clicked}/>
        <form  onSubmit={props.submited}>
            <h1>Welcome!</h1>
            <input value={props.value1} onChange={(event) => props.inputChanged(event.target.value, 'firstPlayer')} className={classes.LoginInput} placeholder='player 1' />
            {props.multiPlayer?<input value={props.value2} onChange={(event) => props.inputChanged(event.target.value, 'secondPlayer')} className={classes.LoginInput} placeholder='player 2' />:null}
            <button
                disabled={props.disable}
                className={classes.LoginButton}
            >LETS PLAY!</button>
        </form>
        
        </div>
        
    )
}
export default login