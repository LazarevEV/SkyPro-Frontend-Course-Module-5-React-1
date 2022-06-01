import React, { useState, useEffect, useRef, createRef } from 'react'
import PropTypes, { func } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import BasicButton from './BasicButton'

const MenuBarStyled = styled.div`
    padding: 8px;
    border-bottom: 1px solid #e4e4e4;
`

const MenuBar = ({ currentConsoleIdx, setCurrentConsoleIdx, setLines }) => {
    function clearConsole() {
        setCurrentConsoleIdx(++currentConsoleIdx)
        setLines(['C:\\users\\SKYPRO_REACT>'])
    }

	return (
		<MenuBarStyled>
            <BasicButton buttonText={'CLEAR'} onClick={clearConsole}/>
		</MenuBarStyled>
	)
}

MenuBar.propTypes = {
    currentConsoleIdx: PropTypes.number,
	setCurrentConsoleIdx: PropTypes.func,
    setLines: PropTypes.func
}

export default MenuBar