import React from 'react'
import { useState } from 'react'
import MinMax from './MinMax'

function booksStub() {
    return [
        {
            id: 1,
            title: 'Война и мир - Л.Н.Толстой',
            price: 800,
            rest: 10,
            quantity: 0,
        },
        {
            id: 2,
            title: 'Две жизни - К.Е.Антарова',
            price: 700,
            rest: 5,
            quantity: 0,
        },
        {
            id: 3,
            title: 'Разговор с богом - Н.Д.Уолша',
            price: 1000,
            rest: 2,
            quantity: 0,
        },
        {
            id: 5,
            title: 'Хохот Шамана - В.П.Серкин',
            price: 600,
            rest: 8,
            quantity: 0,
        },
        {
            id: 4,
            title: 'Хроники Ехо - Макс Фрай',
            price: 400,
            rest: 8,
            quantity: 0,
        },
    ]
}
export default function BookCart() {
    const [books, setBooks] = useState(booksStub())

    const setQuantity = (id, quantity) => {
        setBooks(
            books.map((book) => (book.id !== id ? book : { ...book, quantity }))
        )
    }

    const deleteItem = (id) => {
        setBooks(
            books.filter((book) => book.id !== id)
        )
    }

    const getTotalAmount = () => {
        return books.map((book) => book.quantity * book.price).reduce((a, b) => a + b, 0)
    }

    return (
        <div className="some">
            <h1>books list</h1>
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    {books.map((book, i) => (
                        <tr key={book.id}>
                            <td>{i + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.price}</td>
                            <td>
                                <MinMax
                                    max={book.rest}
                                    current={book.quantity}
                                    onChange={(quantity) => setQuantity(book.id, quantity)}
                                />
                            </td>
                            <td>
                                {book.quantity * book.price}
                            </td>
                            <td>
                                <button type="button" className="deleteItemButton" onClick={(e) => {deleteItem(book.id, e)}}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Total Amount: {getTotalAmount()}</h2>
        </div>
    )
}

/* 
const setquantity = (id, quantity) => {
    const newbooks = [ ...books ];
    const productInd = books.findIndex(book => book.id == id);
    const newProduct = { ...books[productInd] };
    newProduct.quantity = quantity;
    newbooks[productInd] = newProduct;
    setbooks(newbooks);
} */