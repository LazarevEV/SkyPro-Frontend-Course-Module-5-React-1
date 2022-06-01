import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const circlePit = keyframes`
	transform : rotateZ()
`

const StyledLine = styled.textarea`
	width: 100%;
	height: 100%;

	background: black;
	font-size: 24px;
	color: #e4e4e4;
	border: none;
	resize: none;

	padding: 0;
	margin: 0;

	&:focus{
		outline:none
	}
	animation : ${circlePit} 2s
`

const Line = forwardRef((props, ref) => {
	const [linePath, setLinePath] = useState(props.linePath)

	const onChange = (e) => {
		e.target.value = (e.target.value.length <= linePath.length) ? linePath : e.target.value
	}

	return <StyledLine ref={ref} defaultValue={linePath} onChange={onChange}/>
})

Line.displayName = 'Line'

export default Line

Line.propTypes = {
	linePath: PropTypes.string
}