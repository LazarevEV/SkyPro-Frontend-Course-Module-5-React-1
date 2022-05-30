import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import '../css/ArrayMapTaskComponent.css'
import '../css/ShowHideTextBlock.css'

export default function ShowHideTextBlock() {
    const [isHidden, setIsHidden] = useState(true)
    const textRef = useRef(null)

    function handleOnClick() {
        setIsHidden(!isHidden)
        textRef.current.style.display = (isHidden) ? "block" : "none"
    }

    return (
        <div className="array-map-wrapper">
            <button className="spoiler-button" onClick={handleOnClick}>{isHidden ? "Show" : "Hide"}</button>
            <div className="spoiler-text hidden" ref={textRef}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et erat sit amet mi tincidunt ornare sed quis est. Nam vehicula augue vel dui rhoncus suscipit. Maecenas id malesuada lorem. Vestibulum vel elit nunc. Nulla feugiat condimentum lacinia. In erat nisi, finibus vel consequat et, eleifend id neque. In hac habitasse platea dictumst. Nulla at aliquet dui, auctor varius odio. Donec condimentum, massa eu finibus finibus, felis ex egestas augue, quis tincidunt mi quam eu lacus. Quisque elementum fringilla elit, ut faucibus urna consequat sed. Fusce laoreet iaculis mi, quis tempus mauris consequat at. Nam ut dolor at urna volutpat.
            </div>
        </div>
    )
}