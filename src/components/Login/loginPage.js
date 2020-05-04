import React from 'react'
import classes from './login.module.css'

const login = (props) => {
    return (
        <form className={classes.LoginForm} onSubmit={props.submited}>
            <h1>Welcome!</h1>
            <input value={props.value1} onChange={(event) => props.inputChanged(event, 'firstPlayer')} className={classes.LoginInput} placeholder='player 1' />
            <input value={props.value2} onChange={(event) => props.inputChanged(event, 'secondPlayer')} className={classes.LoginInput} placeholder='player 2' />
            <button
                disabled={props.disable}
                className={classes.LoginButton}
            >LETS PLAY!</button>
        </form>
    )
}
export default login