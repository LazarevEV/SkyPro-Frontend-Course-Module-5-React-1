import React, { useState, useEffect, useRef, createRef } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const BasicButtonStyled = styled.button`
    width: 98px;
    height: 32px;

    border: none;
    border-radius: 8px;
    background-color: teal;

    font-size: 18px;

    &:hover {
        cursor: pointer;
        background-color: grey;
    }

`

const BasicButton = ({ buttonText, onClick }) => {
    return (
        <BasicButtonStyled onClick={onClick}>{buttonText}</BasicButtonStyled>
    )
}

export default BasicButton

BasicButton.propTypes = {
    buttonText: PropTypes.string,
    onClick: PropTypes.func
}