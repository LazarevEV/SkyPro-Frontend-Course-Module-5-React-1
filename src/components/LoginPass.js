import React, { useState } from 'react'
import useInputRequired from '../hooks/useInputRequired'
import { Link, useNavigate } from 'react-router-dom'

const IS_LOGIN_REQUIRED = true;
const IS_PASSWORD_REQUIRED = true;

export default function LoginPass() {
    const [creds, inputChangeHandler, onBlurHandler, inputState, setInputState] = useInputRequired({});
    const navigate = useNavigate();

    const validateCreds = () => {
        let count = 0;
        [...document.querySelectorAll('input')].forEach((inputElement) => {
            if (inputElement.className === 'login' && IS_LOGIN_REQUIRED) {
                // count += (inputElement.value === "") ? 1 : 0;
                // setInputState({...inputState, [inputElement.className]: (inputElement.value === "") ? 0 : 1});
                count += (validateLogin()) ? 0 : 1;
                setInputState({...inputState, [inputElement.className]: (validateLogin()) ? 1 : 0});
            }

            if (inputElement.className === 'password' && IS_PASSWORD_REQUIRED) {
                // count += (inputElement.value === "") ? 1 : 0;
                // setInputState({...inputState, [inputElement.className]: (inputElement.value === "") ? 0 : 1});
                count += (validatePassword()) ? 0 : 1;
                setInputState({...inputState, [inputElement.className]: (validatePassword()) ? 1 : 0});
            }
        })

        if (count === 0) navigate('/cart', {replace: true})
    }

    const validateLogin = () => {
        return (/\S+@\S+\.\S+/.test((creds.login || ""))) ? true : false;
    }

    const validatePassword = () => {
        return ((creds.password  || '').length >= 6) ? true : false;
    }

    return (
        <div className="cred-wrapper">
            <label htmlFor="login-input">Login:</label>
            <input id="login-input" name="login" className="login" onChange={inputChangeHandler} onBlur={(event) => onBlurHandler(event, IS_LOGIN_REQUIRED)}></input>
            <span className="error-message login">This field is required!</span>
            <label htmlFor="pass-input">Password:</label>
            <input id="pass-input" name="password" className="password" onChange={inputChangeHandler} onBlur={(event) => onBlurHandler(event, IS_PASSWORD_REQUIRED)}></input>
            <span className="error-message password">This field is required!</span>
            <button type="submit" className="button" onClick={validateCreds}>LOG IN</button>
        </div>
    )
}