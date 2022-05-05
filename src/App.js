import './App.css';
import StudCard from './StudCard';
import StudCardClass from './StudCardClass';
import MinMaxIncrement from './MinMaxIncrement';

function App() {
	return (
		<div className="App">
			<MinMaxIncrement min={-5} max={5}/>
			<MinMaxIncrement min={-100} max={-10}/>
			<MinMaxIncrement min={50} max={55}/>
			<MinMaxIncrement min={10} max={10}/>
		</div>
	)
}

// <StudCard name={}/> --> React.createElement(StudCard, {})

// function StudCard({ text }) {
//   return (
//     <>
//       <hr />
//       <div className="card">{text}</div>
//       <hr />
//     </>
//   )
// }

export default App;
