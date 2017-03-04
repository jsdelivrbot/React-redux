function combineReducer(currentState, action){
	var nextState = Object.assign({}, currentState);

	nextState = {
		count: counter(nextState.count, action),
		sum: sum(nextState.sum, action),
		images: images(nextState.images, action)
	}

	return nextState;
}
