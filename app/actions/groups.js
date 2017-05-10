import {GET_GROUPS_SUCCESS} from '../actions/types';

export function getGroupsSuccess(groups) {
	return {
		type: GET_GROUPS_SUCCESS,
		groups
	};
}