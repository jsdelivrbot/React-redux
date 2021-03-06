export default function(state = [], action){
	switch(action.type){
		case 'ADD_TODO':
			const newTodo = {
				id: action.id,
				text: action.text,
				completed: false
			};
			return [
				...state,
				newTodo
			];
		case 'TOGGLE_TODO':
			return state.map(todo => {
				console.log('todo.id', todo.id);
				console.log('action.id', action.id);
				console.log('todo.completed', todo.completed);
				
				if(todo.id !== action.id){
					return todo;
				}

				return {
					...todo,
					completed: !todo.completed
				}
			});
		default:
			return state;
	}
}
