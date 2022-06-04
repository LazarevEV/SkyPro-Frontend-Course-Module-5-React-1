import React, { useState, useEffect, useRef, createRef } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import lightThemeIconBlack from '../assets/icons/sun_black.png'
import darkThemeIconWhite from '../assets/icons/crescent_moon_white.png'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;

    align-items: center;
`

const CheckBoxWrapper = styled.div`
    position: relative;
    align-items: center;
`

const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 25px;
    border-radius: 15px;
    background: #000000;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: ${(props) => (props.toggleState) ? '#000000' : '#e4e4e4'};
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    };
`

const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${CheckBoxLabel} {
        background: #e4e4e4;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }

    margin: 0;
`

const ThemeIcon = styled.img`
    width: 25px;
    height: 25px;

    margin-bottom: 4px;
`

const ToggleSwitch = ({ initState, actionFunction }) => {
    const [toggleState, setToggleState] = useState(initState)

    const handleToggleClick = () => {
        setToggleState(!toggleState)
        actionFunction(toggleState)
    }

    return (
        <Wrapper>
            <ThemeIcon src={lightThemeIconBlack}/>
            <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" defaultChecked={initState} />
                <CheckBoxLabel htmlFor="checkbox" onClick={() => handleToggleClick()} toggleState={toggleState} />
            </CheckBoxWrapper>
            <ThemeIcon src={darkThemeIconWhite}/>
        </Wrapper>
    )
}

ToggleSwitch.propTypes = {
    initState: PropTypes.bool,
    actionFunction: PropTypes.func
}

export default ToggleSwitch