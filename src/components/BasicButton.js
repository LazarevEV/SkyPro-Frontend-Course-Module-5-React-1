import React, { useState, useEffect, useRef, createRef } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const BasicButton = ({ buttonText, onClick }) => {
    return (
        <button onClick={onClick}>{buttonText}</button>
    )
}

export default BasicButton

BasicButton.propTypes = {
    buttonText: PropTypes.string,
    onClick: PropTypes.func
}