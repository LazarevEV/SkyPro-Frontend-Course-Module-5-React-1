import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import '../css/SquaresTask.css'

export default function SquaresTask() {
    const greenRef = useRef(null)
    const blueRef = useRef(null)
    const redRef = useRef(null)

    function handleOnClick(event) {
        switch (event.target.id) {
            case "green":
                greenRef.current.style.visibility = "hidden"
                redRef.current.style.visibility = "visible"
                break
            case "red":
                redRef.current.style.visibility = "hidden"
                greenRef.current.style.visibility = "visible"
                break
        }
    }

    return (
        <div className="array-map-wrapper squares">
            <button id="green" ref={greenRef} className="square green" onClick={(e) => handleOnClick(e)}></button>
            <button id="blue" ref={blueRef} className="square blue" onClick={(e) => handleOnClick(e)}></button>
            <button id="red" ref={redRef} className="square red" onClick={(e) => handleOnClick(e)}></button>
        </div>
    )
}