import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter2, { a as a2, b} from './components/Counter';
import Sum from './components/Sum';

class Describe extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('Describe.render()');
        return(
            <div>
                Describe: <span style={{color: 'red'}}>{this.props.desc}</span>
            </div>
        )
    }
}

class Exmples extends Component{
    constructor(props){
        super(props);
        this.state = {describe: 'none'};
        this.updateDescribe = this.updateDescribe.bind(this);
    }

    updateDescribe(describe){
        this.setState({describe: describe});
    }

    render(){
        console.log('Example.render()');
        return(
            <div>
                <h1>React</h1>
                <Describe desc = {this.state.describe} />
                <Counter2 countDesc = {this.updateDescribe} />
                <Sum sumDesc = {this.updateDescribe} />
            </div>
        );
    }
}

ReactDOM.render(
    <Exmples/>,
    document.getElementById('root')
);