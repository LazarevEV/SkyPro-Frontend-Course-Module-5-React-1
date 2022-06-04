import React, { useState, useEffect, useRef, createRef } from 'react'
import PropTypes, { func } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import BasicButton from './BasicButton'
import ToggleSwitch from './ToggleSwitch'

const MenuBarStyled = styled.div`
    width: calc(100% - 16px);

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 64px;

    padding: 8px;
    border-bottom: 1px solid ${(props) => (props.theme.menuBorderColor)};
`

const MenuBar = ({ currentConsoleIdx, setCurrentConsoleIdx, setLines, defaultTheme, setAppTheme, theme }) => {
    function clearConsole() {
        setCurrentConsoleIdx(++currentConsoleIdx)
        setLines(['C:\\users\\SKYPRO_REACT>'])
    }

	return (
		<MenuBarStyled theme={theme}>
            <BasicButton buttonText={'CLEAR'} onClick={clearConsole} theme={theme}/>
            <ToggleSwitch initState={defaultTheme === 'dark'} actionFunction={setAppTheme}/>
		</MenuBarStyled>
	)
}

MenuBar.propTypes = {
    currentConsoleIdx: PropTypes.number,
	setCurrentConsoleIdx: PropTypes.func,
    setLines: PropTypes.func,
    defaultTheme: PropTypes.string,
    setAppTheme: PropTypes.func,
    theme: PropTypes.object
}

export default MenuBar