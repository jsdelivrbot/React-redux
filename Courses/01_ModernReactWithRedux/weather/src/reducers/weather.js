import {FETCH_WEATHER} from '../actions/index';

export default (state = [], action) => {

	console.log('action: ', action);

	switch (action.type){
		case FETCH_WEATHER:			
			return [
				action.payload.data, ...state
			];
		default:
			return state;
	}
}