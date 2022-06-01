import React, { forwardRef, useState, componentWillReceiveProps, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const circlePit = keyframes`
	transform : rotateZ()
`

const LineStyled = styled.textarea`
	width: 95vw;

	background: black;
	font-size: 24px;
	color: #e4e4e4;
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

	return <LineStyled ref={ref} defaultValue={linePath} onChange={onChange}/>
})

Line.displayName = 'Line'

export default Line

Line.propTypes = {
	linePath: PropTypes.string,
	disabled: PropTypes.bool
}