import React, {Component} from 'react';
import {modal} from 'react-redux-modal';
import modalAddUser from './containers/modal-add-user'
import * as userApi from '../api/api';

class ToolBar extends Component {
	constructor(props, context) {
		super(props, context);

		this.groupUsers = this.groupUsers.bind(this);
		this.openModalAddUser = this.openModalAddUser.bind(this);
		this.sortByNames = this.sortByNames.bind(this);
		this.sortBySurNames = this.sortBySurNames.bind(this);
	}

	groupUsers() {
		userApi.groupUsers(this.refs.selectGroupBy.value);
	}

	openModalAddUser() {
		let clientWidth = document.documentElement.clientWidth;
		let size = "large";

		if (clientWidth < 850) size = 'medium';
		if (clientWidth < 550) size = 'small';

		modal.add(modalAddUser, {
			title: 'Добавление пользователя',
			size: size,
			closeOnOutsideClick: true
		});
	}

	sortByNames() {
		let sortOrder = this.props.sort.name === "ASC" ? "DESC" : "ASC";

		userApi.sortUsers("name", sortOrder, this.props.currentGroup);
	}

	sortBySurNames() {
		let sortOrder = this.props.sort.surname === "ASC" ? "DESC" : "ASC";

		userApi.sortUsers("surname", sortOrder, this.props.currentGroup);
	}

	render() {
		const sort = this.props.sort;

		let sortNamesClass = sort.name === "ASC" ?
			"glyphicon glyphicon-sort-by-alphabet" : "glyphicon glyphicon-sort-by-alphabet-alt";
		let sortSurnamesClass = sort.surname === "ASC" ?
			"glyphicon glyphicon-sort-by-alphabet" : "glyphicon glyphicon-sort-by-alphabet-alt";

		return (
			<div className="row toolbar">
				<div className="col-sm-12">
					<button className="btn btn-default btn-responsive" disabled={this.props.isProgress} onClick={this.openModalAddUser}>
						<span className="glyphicon glyphicon-plus"></span>  Добавить пользователя
					</button>
					<button className="btn btn-default btn-responsive" disabled={this.props.isProgress} onClick={this.sortByNames}>
						<i className={sortNamesClass}></i>  Сортировать по имени
					</button>
					<button className="btn btn-default btn-responsive" disabled={this.props.isProgress} onClick={this.sortBySurNames}>
						<i className={sortSurnamesClass}></i>  Сортировать по фамилии
					</button>
					<div className="form-group">
						<label htmlFor="selectGroupBy">Группировать по</label>
						<select className="form-control" id="selectGroupBy" ref="selectGroupBy" onChange={this.groupUsers}>
							<option></option>
							{
								this.props.groups.map(group => {
									return (<option key={group.groupId}>{group.groupName}</option>);
								})
							}
						</select>
					</div>
				</div>
			</div>
		);
	}

};

export default ToolBar;