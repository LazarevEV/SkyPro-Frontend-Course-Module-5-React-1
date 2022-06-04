import React, { forwardRef, useState, componentWillReceiveProps, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const circlePit = keyframes`
	transform : rotateZ()
`

const LineStyled = styled.textarea`
	width: calc(100vw - 16px);

	background: ${(props) => (props.theme.backgroundColor)};
	font-size: 24px;
	color: ${(props) => (props.theme.fontColor)};
	border: none;
	resize: none;

	padding: 8px;
	padding-bottom: 0;
	margin: 0;

	&:focus{
		outline:none
	}
	animation : ${circlePit} 2s
`

const Line = forwardRef((props, ref) => {
	const [linePath, setLinePath] = useState(props.linePath)
	const [isDisabled, setIsDisabled] = useState(false)

	const onChange = (e) => {
		const LineElement = e.target
		LineElement.value = (LineElement.value.length <= linePath.length) ? linePath : LineElement.value
		LineElement.style.height = '1px'
		// LineElement.style.height = ''
		LineElement.style.height = LineElement.scrollHeight + 'px'
	}

	const handleKeyPress = (e) => {
		if (e.keyCode === 37 && e.target.selectionStart === linePath.length) e.preventDefault()
	}

	const handleMousePress = (e) => {
		if (e.target.selectionStart < linePath.length) {
			const cursorPosition = linePath.length
			e.target.setSelectionRange(cursorPosition, cursorPosition)
		}
	}

	return <LineStyled ref={ref} defaultValue={linePath} onChange={onChange} onKeyDown={handleKeyPress} onMouseUp={handleMousePress} theme={props.theme} />
})

Line.propTypes = {
	linePath: PropTypes.string,
	disabled: PropTypes.bool,
    theme: PropTypes.object
}

Line.displayName = 'Line'

export default Line