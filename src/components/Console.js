import React, { useState, useEffect, useRef, createRef } from 'react'
import PropTypes, { string } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Line from './Line'

const Console = () => {
	const [lines, setLines] = useState(['C:\\users\\SKYPRO_REACT>'])

	let lineRefs = useRef([createRef()])

	const handleEnterPress = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault()
			setLines(lines => [...lines, 'C:\\users\\SKYPRO_REACT>'])
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
		<div onKeyDown={handleEnterPress}>
			{lines.map((line, idx) => (
				<Line key={idx} ref={el => lineRefs.current[idx] = el} linePath={line}/>
			))}
			{/* {lines.map((line, idx) => (
				<textarea key={idx} ref={} defaultValue={line}/>
			))} */}
		</div>
	)
}

Console.propTypes = {
	lines: PropTypes.array,
	setLines: PropTypes.func
}

export default Console