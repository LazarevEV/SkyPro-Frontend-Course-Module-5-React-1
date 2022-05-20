import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './page/About'
import NotFound from './page/NotFound'
import OrderTotals from './page/OrderTotals'
import BookCart from './components/BookCart'
import LoginPass from './components/LoginPass'

function App() {
	return (
		<div className="1">
			<div className="App">
				<Routes>
					<Route path="/" element={<LoginPass />} />
					<Route path="/cart" element={<BookCart/>} />
					<Route path="/cart_totals" element={<OrderTotals/>} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App