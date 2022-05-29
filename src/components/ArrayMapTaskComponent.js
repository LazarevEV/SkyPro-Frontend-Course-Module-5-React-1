import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../css/ArrayMapTaskComponent.css'
import MinMax from './MinMax'

export default function ArrayMapTaskComponent() {
    const [num, setNum] = useState(1)
    const [numArray, setNumArray] = useState([0])

    function isPrime(num) {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false

        return num > 1
    }

    function isEven(num) {
        return num % 2 === 0
    }

    function handleOnChange(num) {
        setNum(num)
        setNumArray([...Array(num).keys()])
    }

    function getColorClass(num) {
        return (isPrime(num)) ? "prime" : (isEven(num)) ? "even" : "odd"
    }

    return (
        <div className="array-map-wrapper">
            <MinMax
                min={0}
                max={100}
                current={num}
                onChange={(newNum) => handleOnChange(newNum)}
            />
            <div className="number-grid">
                {numArray.map((num) => (
                    <div className={"num-card " + getColorClass(num)} key={num}>{num}</div>
                ))}
            </div>
        </div>
    )
}