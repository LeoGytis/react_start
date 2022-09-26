import React from 'react';


class Counter extends React.Component {
    
    constructor() {
        super();
        this.state = {counter: 0};
    }

    doCklick = () => {
        this.setState(s => ({counter: s.counter + 1}));
    }

    componentDidMount() {
        console.log('LOaded');
    }

    componentWillUnmount() {
        console.log('numiro');
    }

    componentDidUpdate() {
        console.log('apsiapdeitino');
    }

    render() {
        return (
            <>
            <div>{this.state.counter}: {this.props.when}</div>
            <button onClick={this.doCklick}>
            <svg>
                <use href="#star"/>
            </svg>
            <svg className="kitas-svg">
                <use href="#star"/>
            </svg>
            <svg>
                <use href="#star"/>
            </svg>
            </button>
            </>
        )
    }
}

export default Counter;