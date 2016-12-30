import React, {PropTypes} from 'react';

const Todo = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{textDecoration: completed?'line-through':'none', padding: '10px 0'}}
    >
        {text}
    </li>
);

Todo.propsTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;