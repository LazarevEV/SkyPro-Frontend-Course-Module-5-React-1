import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import MenuBar from './components/MenuBar'
import Console from './components/Console'

const LIGHT_THEME = {
	// TODO
}

const DARK_THEME = {
	// TODO
}

const GlobalStyle = createGlobalStyle`
  	body {
		width: 100vw;
		height: 100vh;
		margin: 0;
  	  	padding: 0;
  	  	font-family: Open-Sans, Helvetica, Sans-Serif;
  	}
`

function App() {
	const [lines, setLines] = useState(['C:\\users\\SKYPRO_REACT>'])

	return (
		<>
			<GlobalStyle />
			<MenuBar />
			<Console />
		</>
	)
}

export default App