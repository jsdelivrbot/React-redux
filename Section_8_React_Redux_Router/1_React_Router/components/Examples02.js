import React, {Component} from 'react';

export default class Examples02 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Example 02</h1>
                Hello world
            </div>
        )
    }
}