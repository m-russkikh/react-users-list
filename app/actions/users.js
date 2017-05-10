import * as types from '../actions/types';

export function getUsersSuccess(users) {
	return {
		type: types.GET_USERS_SUCCESS,
		users
	};
}

export function getUsersError() {
	return {
		type: types.GET_USERS_ERROR,
		errorText: "Ошибка при загрузке данных"
	};
}

export function updateUsersSuccess(users, page) {
	return {
		type: types.UPDATE_USERS_SUCCESS,
		users,
		page
	};
}

export function updateUsersError() {
	return {
		type: types.UPDATE_USERS_ERROR,
		errorText: "Ошибка при обновлении данных"
	};
}

export function addUserSuccess(user) {
	return {
		type: types.ADD_USER_SUCCESS,
		user
	};
}

export function addUserError() {
	return {
		type: types.ADD_USER_ERROR,
		errorText: "Ошибка при добавлении пользователя"
	};
}

export function sortUsersSuccess(users, field, order) {
	return {
		type: types.SORT_USER_SUCCESS,
		users,
		field,
		order
	};
}

export function sortUsersError() {
	return {
		type: types.SORT_USER_ERROR,
		errorText: "Ошибка в сортировке данных"
	};
}

export function groupUsersSuccess(users, group) {
	return {
		type: types.GROUP_USERS_SUCCESS,
		users,
		group
	};
}

export function groupUsersError() {
	return {
		type: types.GROUP_USERS_ERROR,
		errorText: "Ошибка в группировке данных"
	};
}