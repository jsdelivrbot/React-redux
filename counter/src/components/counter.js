import React, {Component, PropTypes} from 'react';

class Counter extends Component{
    incrementIfOdd(){
        if(this.props.value % 2 !== 0){
            this.props.onIncrement();
        }
    };

    incrementAsync(){
        this.props.onIncrement();
        //setTimeout(this.props.onIncrement, 100);
    };

    render(){
        const {value, onIncrement, onDecrement} = this.props;

        return(
            <p>
                Clicked: {value} times {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
                {' '}
                <button onClick={this.incrementIfOdd.bind(this)}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync.bind(this)}>
                    Increment async
                </button>
            </p>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default Counter;