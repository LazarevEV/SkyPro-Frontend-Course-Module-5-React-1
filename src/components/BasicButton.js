import React, { useState, useEffect, useRef, createRef } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const BasicButtonStyled = styled.button`
    width: 98px;
    height: 32px;

    border: none;
    border-radius: 8px;
    background-color: ${(props) => (props.theme.buttonColor)};

    font-size: 18px;
    font-weight: 600;
    color: ${(props) => (props.theme.buttonFontColor)};

    &:hover {
        cursor: pointer;
        background-color: ${(props) => (props.theme.buttonHoverColor)};
    }

`

const BasicButton = ({ buttonText, onClick, theme }) => {
    return (
        <BasicButtonStyled onClick={onClick} theme={theme}>{buttonText}</BasicButtonStyled>
    )
}

export default BasicButton

BasicButton.propTypes = {
    buttonText: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.object
}