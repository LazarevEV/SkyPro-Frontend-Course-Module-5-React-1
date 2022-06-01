import React, { useState, useRef, createRef, useEffect } from 'react'
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

		background: black;
		font-family: Open-Sans, Helvetica, Sans-Serif;

		margin: 0;
  	  	padding: 0;
  	}
`

function App() {
	const [lines, setLines] = useState(['C:\\users\\SKYPRO_REACT>'])
	const [currentConsoleIdx, setCurrentConsoleIdx] = useState(0)

	return (
		<>
			<GlobalStyle />
			<MenuBar currentConsoleIdx={currentConsoleIdx} setCurrentConsoleIdx={setCurrentConsoleIdx} setLines={setLines}/>
			<Console key={currentConsoleIdx} lines={lines} setLines={setLines}/>
		</>
	)
}

// class App extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			lines: ['C:\\users\\SKYPRO_REACT>'],
// 			currentConsoleIdx: 0
// 		}
// 	}
	
// 	setLines = (lines) => {
// 		this.setState({lines: lines})
// 	}

// 	setCurrentConsoleIdx = (newIdx) => {
// 		this.setState({currentConsoleIdx: newIdx})
// 	}

// 	render() {
// 		return (
// 			<>
// 				<GlobalStyle />
// 				<MenuBar currentConsoleIdx={this.state.currentConsoleIdx} setCurrentConsoleIdx={this.setCurrentConsoleIdx}/>
// 				<Console key={this.state.currentConsoleIdx} id={this.state.currentConsoleIdx} lines={this.state.lines} setLines={this.setLines}/>
// 			</>
// 		);
// 	}
// }

export default App