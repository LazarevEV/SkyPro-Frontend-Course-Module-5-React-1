import React, { useState, useRef, createRef, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import MenuBar from './components/MenuBar'
import Console from './components/Console'

const LIGHT_THEME = {
	backgroundColor: '#e4e4e4',
	fontColor: '#000000',
	buttonColor: '#000000',
	buttonHoverColor: '#5e5e5e',
	buttonFontColor: '#e4e4e4',
	menuBorderColor: '#000000'
}

const DARK_THEME = {
	backgroundColor: '#000000',
	fontColor: '#e4e4e4',
	buttonColor: '#e4e4e4',
	buttonHoverColor: '#c9c9c9',
	buttonFontColor: '#000000',
	menuBorderColor: '#e4e4e4'
}

const THEMES = [LIGHT_THEME, DARK_THEME]
const DEFAULT_THEME = 'dark'

const GlobalStyle = createGlobalStyle`
  	body {
		width: 100vw;
		height: 100vh;

		background: ${(props) => (props.theme.backgroundColor)};
		font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;

		margin: 0;
  	  	padding: 0;
  	}
`

const WrapperStyled = styled.div`
	  width: 95vw
	  display: flex;
	  flex-direction: column;
`

function App() {
	const [theme, setTheme] = useState(THEMES[+(DEFAULT_THEME === 'dark')])
	const [lines, setLines] = useState(['C:\\users\\SKYPRO_REACT>'])
	const [currentConsoleIdx, setCurrentConsoleIdx] = useState(0)

	const setAppTheme = (toggleState) => {
		setTheme(THEMES[+!toggleState] || theme)
	}

	return (
		<WrapperStyled>
			<GlobalStyle theme={theme} />
			<MenuBar
				currentConsoleIdx={currentConsoleIdx}
				setCurrentConsoleIdx={setCurrentConsoleIdx}
				setLines={setLines}
				defaultTheme={DEFAULT_THEME}
				setAppTheme={setAppTheme}
				theme={theme}
			/>
			<Console key={currentConsoleIdx} lines={lines} setLines={setLines} theme={theme} />
		</WrapperStyled>
	)
}

export default App