/* eslint-disable react/prop-types */
import axios from 'axios';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import OrderInfoContext from '../context/OrderInfoContext'
import OrderDetail from './OrderDetail'
import '../css/Order.css'

const SaveOrder = styled(Link)`
    width: 96px;
    height: 32px;

    border-radius: 8px;
    border: none;
    background-color: #48bf53;
    font-size: 18px;
    color: #000000;
    text-decoration: none;
    text-align: center;

    margin-top: 12px;

    &:hover {
        cursor: pointer;
        background-color: #11823b;
    }

    &:visited {
        color: #000000;
    }
`

export default class Order extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: 0,
            quantity: 0,
            details: [],
        }
    }

    static contextType = OrderInfoContext;

    componentDidMount() {
        console.log('> componentDidMount > axios')
        const requestUrl = 'https://api.jsonbin.io/v3/b/62c1b3583e0012331d99f8b3'
        const token = '$2b$10$c/D2g4Hc39oVfh/vwGcOP.KVP.i39.8pomHwrNtP16/qPZtShANea'
        const requestParams = {
            headers: {
                'X-Master-Key': token
            }
        }
        axios.get(requestUrl, requestParams)
            .then(res => {
                // console.log(`>> DATA: ${res.data.record.bookStub}`)
                const details = res.data.record.bookStub
                this.setState({ ...this.state, details: details });
            })
    }

    increaseUnitQuantityAndPrice = (unitId) => {
        let stateDetails = Object.values({...this.state.details});
        stateDetails.forEach((unit) => {
            if (unit.id === unitId) {
                unit.quantity += 1;
                this.setState({amount: this.state.amount + unit.price, quantity: this.state.quantity + 1})
            }
        });

        this.setState({details: stateDetails});
    }

    decreaseUnitQuantityAndPrice = (unitId) => {
        let stateDetails = Object.values({...this.state.details});
        stateDetails.forEach((unit) => {
            if ( (unit.id === unitId) && (unit.quantity !== 0) ) {
                unit.quantity -= 1;
                this.setState({amount: this.state.amount - unit.price, quantity: this.state.quantity - 1})
            }
        });

        this.setState({details: stateDetails});
    }

    saveOrder = () => {
        console.log('saveOrder')
        console.log(this.state.details.filter(book => book.quantity !== 0))
        this.context.setOrder(this.state.details.filter(book => book.quantity !== 0))
    }

    render() {
        console.log(this.context)
        const orderList = this.state.details.map((order) => 
            <OrderDetail
                key={order.id}
                id={order.id}
                productName={order.productName}
                price={order.price}
                quantity={order.quantity}
                incrementFunction={this.increaseUnitQuantityAndPrice}
                decrementFunction={this.decreaseUnitQuantityAndPrice}
            />
        );

        return (
            <div className="order">
                <div className="card-wrapper">
                    {orderList}
                </div>
                <div className="total-info-wrapper">
                    <p className="total">
                        Total Quantity : <b>{this.state.quantity}</b>
                    </p>
                    <p className="total">
                        Total Price : <b>{this.state.amount}</b>
                    </p>
                    <SaveOrder to={"/user_order"} onClick={this.saveOrder}>Order</SaveOrder>
                </div>
            </div>
        )
    }
}