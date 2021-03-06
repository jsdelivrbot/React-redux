import React from 'react';
import ReactDOM from 'react-dom';
import Examples from './components/Examples';
import store from './redux/store/index';

function render() {
    ReactDOM.render(
        <Examples/>,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);