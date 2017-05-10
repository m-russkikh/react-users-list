import * as types from '../actions/types';

const initialState = {
	users: [],
	sort: {
		name: "ASC",
		surname: "ASC",
		current: ""
	},
	page: 1,
	isProgress: false,
	currentGroup: "",
	errorText: ""
};

const userReducer = function(state = initialState, action) {
	switch(action.type) {
		case types.GET_USERS_SUCCESS:
			return {...state, users: action.users, isProgress: false};

		case types.GET_USERS_ERROR:
			return {...state, errorText: action.errorText};

		case types.SORT_USER_SUCCESS:
			const sort = {...state.sort, [action.field]: action.order, current: action.field};
			return {...state,
				users: action.users,
				sort: sort,
				page: 1,
				isProgress: false};

		case types.ADD_USER_SUCCESS:
			return {...state, users: [action.user].concat(state.users), isProgress: false};

		case types.GROUP_USERS_SUCCESS:
			return {...state,
				users: action.users,
				page: 1,
				isProgress: false,
				currentGroup: action.group,
				sort: {...state.sort, current: ""}};

		case types.UPDATE_USERS_SUCCESS:
			let page = action.users.length ? action.page : action.page - 1;
			return {...state, users: state.users.concat(action.users), isProgress: false, page: page};

		case types.ADD_USER_PROGRESS:
		case types.GET_USERS_PROGRESS:
		case types.SORT_USER_PROGRESS:
		case types.GROUP_USERS_PROGRESS:
		case types.UPDATE_USERS_PROGRESS:
			return {...state, isProgress: true, errorText: ""};

		case types.ADD_USER_ERROR:
		case types.SORT_USER_ERROR:
		case types.GROUP_USERS_ERROR:
		case types.UPDATE_USERS_ERROR:
			return {...state, isProgress: false, errorText: action.errorText};
	}

	return state;
}

export default userReducer;
