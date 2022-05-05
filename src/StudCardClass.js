import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = { current: 1 }
    }

    increment = () => {
        this.setState((prevState) => ({ current: prevState.current + 1 }))
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.decrement}>
                    -1
                </button>
                <span>{this.state.current}</span>
                <button type="button" onClick={this.increment}>
                    +1
                </button>
            </div>
        )
    }
}

// const Foo = класс расширяет React.PureComponent {
//   render() {
//     const { title } = this.context;
//     return <div>{title}</div>;
//   }
// };

// function StudCard({ name, text }) {
//   return (
//     <>
//       <hr />
//       <div className="name">{name}</div>
//       <div className="card">{text}</div>
//       <hr />
//     </>
//   )
// }

// export default StudCard