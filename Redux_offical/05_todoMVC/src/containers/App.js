import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../componenets/Header';
import MainSection from '../componenets/MainSection';
import * as TodoActions from '../actions/index';

const App = ({todos, actions}) => (
    <div>
        <Header addTodo = {actions.addTodo}/>
        <MainSection todos={todos} actions={actions} />
    </div>
);

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);