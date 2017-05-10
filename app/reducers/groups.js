import * as types from '../actions/types';

const initialState = [];

const groupReducer = function(state = initialState, action) {

	switch(action.type) {
		case types.GET_GROUPS_SUCCESS:
			return state.concat(action.groups);
	}

	return state;

}

export default groupReducer;
