import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.min = this.props.min
        this.max = this.props.max
        this.state = { current: this.props.min }
    }

    increment = () => {
        this.setState((prevState) => ({ current: Math.min(prevState.current + 1, this.max) }))
    }

    decrement = () => {
        this.setState((prevState) => ({ current: Math.max(prevState.current - 1, this.min) }))
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.decrement}>
                    -1
                </button>
                {/* <span>{this.state.current}</span> */}
                <input type="text" value={this.state.current} onChange={this.checkInput}></input>
                <button type="button" onClick={this.increment}>
                    +1
                </button>
            </div>
        )
    }
}