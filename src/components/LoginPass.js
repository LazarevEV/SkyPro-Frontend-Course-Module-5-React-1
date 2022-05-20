import React, { useState } from 'react'
import useInputRequired from '../hooks/useInputRequired'

export default function LoginPass() {
    const [creds, inputChangeHandler, onBlurHandler] = useInputRequired({});

    return (
        <form className="cred-wrapper">
            <label htmlFor="login-input">Login:</label>
            <input id="login-input" name="login" className="login" onChange={inputChangeHandler} onBlur={(event) => onBlurHandler(event, true)}></input>
            <span className="error-message login">This field is required!</span>
            <label htmlFor="pass-input">Password:</label>
            <input id="pass-input" name="password" className="pass" onChange={inputChangeHandler} onBlur={(event) => onBlurHandler(event, false)}></input>
            <span className="error-message password">This field is required!</span>
            <button type="submit" className="login-button">LOG IN</button>
        </form>
    )
}