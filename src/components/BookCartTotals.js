import React from "react"
import PropTypes from 'prop-types'

export default function BookCart(props) {
    return (
        <div className="total">
            <h3>Total amount: {props.totalAmount}</h3>
            <h3>Total quantity: {props.totalQuantity}</h3>
        </div>
    )
}

BookCart.propTypes = {
    totalAmount: PropTypes.number,
    totalQuantity: PropTypes.number
}