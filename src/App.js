import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './page/About'
import NotFound from './page/NotFound'
import OrderTotals from './page/OrderTotals'
import SelectTask from './page/SelectTask'
import BookCart from './components/BookCart'
import LoginPass from './components/LoginPass'
import ArrayMapTask from './page/ArrayMapTask'
import LoginPassHW10 from './components/LoginPassHW10'
import ShowHideTextBlock from './components/ShowHideTextBlock'
import SquaresTask from './components/SquaresTask'

function App() {
	return (
		<div className="1">
			<div className="App">
				<Routes>
					<Route path="/" element={<LoginPass />} />
					<Route path="/cart" element={<BookCart/>} />
					<Route path="/cart_totals" element={<OrderTotals/>} />
					<Route path="/about" element={<About />} />
					<Route path="/selectTask" element={<SelectTask />} />
					<Route path="/arrayMapTask" element={<ArrayMapTask />} />
					<Route path="/loginPassHW10" element={<LoginPassHW10 />} />
					<Route path="/spoilerHW11" element={<ShowHideTextBlock />} />
					<Route path="/squaresHW11" element={<SquaresTask />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App