import React from 'react';
// import './styles.css';

export default class ReacTimer extends React.Component {

    state = {
        count: 0,
        isCounting: false,
    };

    increment = () => {
        if (this.state.isCounting) {
            this.setState({ count: this.state.count + 1 });
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.increment(), 1000);
    }

    componentDidUpdate() {
        // Не понадобился ?
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    handleStart = () => {
        this.setState({ isCounting: true });
    }

    handleStop = () => {
        this.setState({ isCounting: false });
    }
    
    handleReset = () => {
        this.setState({ isCounting: false, count: 0 });
    }

    render() {
        return (
            <div className="ReacTimer">
                <h1>React Timer</h1>
                <h3>{this.state.count}s</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}