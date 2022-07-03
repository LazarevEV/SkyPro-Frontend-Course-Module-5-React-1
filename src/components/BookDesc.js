import axios from 'axios';
import React, { useState, useRef, useContext, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UserInfoContext from '../context/UserInfoContext'

import goBackIcon from '../assets/icons/arrow_back.png'

const GoBackButton = styled.button`
    width: 24px;
    height: 24px;

    background: none;
    border: none;

    margin: 0;
    padding: 0;

    &:hover {
        cursor: pointer;
    }
`

const GoBackImg = styled.img`
    width: 16px;
    height: 16px;

    margin: 0;
    padding: 0;
`

const CardContent = styled.div`
    display: grid;
    grid-template-rows: 48px 356px 52px 
`

const BoldText = styled.p`
    font-weight: 700;
    font-size: 24px;
`

export default function BookDesc() {
    const [bookData, setBookData] = useState([])

    const navigate = useNavigate()

    const location = useLocation();
    const book = searchBook(location.state.bookId)

    const goBack = () => {
        navigate(-1)
    }

    const {user, setUser} = useContext(UserInfoContext)
    console.log(user)

    function searchBook(bookId) {
        let searchBook = {
            id: 0,
            productName: 'N/A',
            price: 'N/A',
            quantity: 'N/A'
        }
        bookData.forEach((book) => {
            if (book.id === bookId) searchBook = book
        })
        return searchBook
          
    }

    useEffect(() => {
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
                setBookData(details)
            })
    }, [])

    return (
        <div className="order-detail book-desc">
            <GoBackButton onClick={goBack}><GoBackImg src={goBackIcon} /></GoBackButton>
            <CardContent>
                <BoldText>{book.productName}</BoldText>
                <p>Book Description Text Book Description Text Book Description Text Book Description Text Book Description Text Book Description Text</p>
                <BoldText>{book.price} руб.</BoldText>
            </CardContent>
        </div>
    )
}

const BOOK_DATA = [
    {
        id: 1,
        productName: 'Война и мир - Л.Н.Толстой',
        price: 800,
        quantity: 0,
    },
    {
        id: 2,
        productName: 'Две жизни - К.Е.Антарова',
        price: 700,
        quantity: 0,
    },
    {
        id: 3,
        productName: 'Разговор с богом - Н.Д.Уолша',
        price: 1000,
        quantity: 0,
    },
    {
        id: 4,
        productName: 'Хохот Шамана - В.П.Серкин',
        price: 600,
        quantity: 0,
    },
    {
        id: 5,
        productName: 'Хроники Ехо - Макс Фрай',
        price: 400,
        quantity: 0,
    },
]