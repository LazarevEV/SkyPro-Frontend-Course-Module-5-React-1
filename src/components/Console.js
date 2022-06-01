import React, { useState, useEffect, useRef, createRef } from 'react'
import PropTypes, { string } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Line from './Line'

const ConsoleStyled = styled.div`
	width: 100vw;
	height: 100vh;
`

const Console = ({id, lines, setLines }) => {
	// const [lines, setLines] = useState(['C:\\users\\SKYPRO_REACT>'])

	let lineRefs = useRef([createRef()])

	const handleEnterPress = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault()
			
			setLines([...lines, 'C:\\users\\SKYPRO_REACT>'])
			lineRefs.current = [...lineRefs.current, createRef()]
		}
	}

	useEffect(() => {
		const lastLine = lineRefs.current[lineRefs.current.length - 1] 
		lastLine.focus()
		const cursorPosition = lastLine.selectionEnd + lastLine.defaultValue.length
		lastLine.setSelectionRange(cursorPosition, cursorPosition)
	}, [lineRefs.current.length])

	return (
		<ConsoleStyled key={id} onKeyDown={handleEnterPress}>
			{lines.map((line, idx) => (
				<Line key={idx} ref={el => lineRefs.current[idx] = el} linePath={line}/>
			))}
			{/* {lines.map((line, idx) => (
				<textarea key={idx} ref={} defaultValue={line}/>
			))} */}
		</ConsoleStyled>
	)
}

Console.propTypes = {
	id: PropTypes.number,
	lines: PropTypes.array,
	setLines: PropTypes.func,
}

export default Console