import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './page/About'
import BookCart from './components/BookCart'

function App() {
	return (
		<div className="1">
			<div className="App">
				<Routes>
					<Route path="/" element={<BookCart />} />
					<Route path="about" element={<About />} />
				</Routes>
			</div>
		</div>
	)
}

export default App