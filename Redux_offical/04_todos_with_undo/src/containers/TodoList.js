import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/index';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
	<ul>
		{
			todos.map(todo =>
				<Todo key={todo.id} {...todo}
					onClick = {() => onTodoClick(todo.id)}
				/>
			)
		}
	</ul>
);

TodoList.propType = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

const getVisibleTodos = (todos, filter) => {
	switch(filter){
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		default:
			throw new Error('Unknown filter: ', filter);
	}
}

const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
});

const mapDispatchToProps = ({
	onTodoClick: toggleTodo
});

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;