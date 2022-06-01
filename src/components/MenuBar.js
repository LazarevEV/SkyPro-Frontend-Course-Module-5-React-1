import React, { useState, useEffect, useRef, createRef } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import BasicButton from './BasicButton'

const MenuBar = ({ setLines }) => {
	return (
		<div>
            <BasicButton buttonText={'Clear Console'} onClick={() => alert('Console Cleared!')}/>
		</div>
	)
}

MenuBar.propTypes = {
	setLines: PropTypes.func
}

export default MenuBar