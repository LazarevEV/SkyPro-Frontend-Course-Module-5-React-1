import React from 'react'
import '../css/OrderDetail.css'

export default function OrderDetail(props) {
    return (
        <div className="order-detail">
            <h1 className="card-header">{props.productName}</h1>
            <p className="p-text">Price: {props.price}</p>
            <p className="p-text">Quantity: {props.quantity}</p>
            <div className="control-block">
                <button className="order-detail-button quantity-increase" type="button" onClick={() => {alert('Increased')}}>+</button>
                <button className="order-detail-button quantity-decrease" type="button" onClick={() => {alert('Decreased')}}>-</button>
            </div>
        </div>
    )
}