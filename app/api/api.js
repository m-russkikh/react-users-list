import axios from 'axios';
import store from '../store';

import * as types from '../actions/types';
import * as userActions from '../actions/users';
import * as groupActions from '../actions/groups'

const RECORDS_ON_PAGE = 50;

export function getUsers() {
	store.dispatch({type: types.GET_USERS_PROGRESS});
	return axios.get('http://localhost:3001/users?_limit=' + RECORDS_ON_PAGE + '&_page=1')
		.then(response => {
			store.dispatch(userActions.getUsersSuccess(response.data));
			return response;
		})
		.catch(error => {
			console.warn("userApi.getUsers:", error);
			store.dispatch(userActions.getUsersError());
		});
}

export function updateUsers(page, group, sortField, sortOrder) {
	if (!page || page < 2) {
		store.dispatch(userActions.updateUsersError());
		return Promise.resolve();
	}

	let queryGroup = group !== '' ? '&group=' + group : '';
	let querySort = sortField && sortOrder ? '&_sort=' + sortField + '&_order=' + sortOrder : '';

	store.dispatch({type: types.UPDATE_USERS_PROGRESS});
	return axios.get('http://localhost:3001/users?_limit=' + RECORDS_ON_PAGE + '&_page=' + page + querySort + queryGroup)
		.then(response => {
			store.dispatch(userActions.updateUsersSuccess(response.data, page));
			return response;
		})
		.catch(error => {
			console.warn("userApi.updateUsers:", error);
			store.dispatch(userActions.updateUsersError());
		});
}

export function addUser(user) {
	if (!user.name || !user.surname || !user.group) {
		store.dispatch(userActions.addUserError());
		return Promise.resolve();
	}

	store.dispatch({type: types.ADD_USER_PROGRESS});
	return axios.get('http://localhost:3001/users?add')
		.then(response => {
			user.id = Math.random() * 1000;
			store.dispatch(userActions.addUserSuccess(user));
			return response;
		})
		.catch(error => {
			console.warn("userApi.addUser:", error);
			store.dispatch(userActions.addUserError());
		});
}

export function groupUsers(query) {
	let queryGroup = '';
	if (query) {
		queryGroup = '&group=' + query;
	}

	store.dispatch({type: types.GROUP_USERS_PROGRESS});
	return axios.get('http://localhost:3001/users?_limit=' + RECORDS_ON_PAGE + '&_page=1' + queryGroup)
		.then(response => {
			store.dispatch(userActions.groupUsersSuccess(response.data, query));
			return response;
		})
		.catch(error => {
			console.warn("userApi.groupUsers:", error);
			store.dispatch(userActions.groupUsersError());
		});
}

export function sortUsers(field, order, group) {
	if (!field || !order) {
		store.dispatch(userActions.sortUsersError());
		return Promise.resolve();
	}

	let sortedGroup = group !== "" ? "&group=" + group : "";

	store.dispatch({type: types.SORT_USER_PROGRESS});
	return axios.get('http://localhost:3001/users?_limit=' + RECORDS_ON_PAGE + '&_page=1&_sort=' + field + '&_order=' + order + sortedGroup)
		.then(response => {
			store.dispatch(userActions.sortUsersSuccess(response.data, field, order));
			return response;
		})
		.catch(error => {
			console.warn("userApi.sortUsers:", error);
			store.dispatch(userActions.sortUsersError());
		});
}

export function getGroups() {
	return axios.get('http://localhost:3001/groups')
		.then(response => {
			store.dispatch(groupActions.getGroupsSuccess(response.data));
			return response;
		})
		.catch(error => {
			console.warn("userApi.getGroups:", error);
		});;
}