import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as userApi from '../../api/api';

class modalAddUser extends Component {
	addUser(e) {
		e.preventDefault();

		userApi.addUser({
			name: this.refs.userName.value,
			surname: this.refs.userSurname.value,
			group: this.refs.userGroup.value
		}).then(() => {
			this.props.removeModal();
		});
	}

	render() {
		return (
			<div>
				<form className="form" onSubmit={this.addUser.bind(this)}>
					<div className="form-group">
						<label htmlFor="userName">Имя</label>
						<input type="text" className="form-control" id="userName" ref="userName" placeholder="Имя" required/>
					</div>
					<div className="form-group">
						<label htmlFor="userSurame">Фамилия</label>
						<input type="text" className="form-control" id="userSurname" ref="userSurname" placeholder="Фамилия" required/>
					</div>
					<div className="form-group">
						<label htmlFor="userGroup">Группа</label>
						<select className="form-control" id="userGroup" ref="userGroup">
							{
								this.props.groups.map(group => {
									return (<option key={group.groupId}>{group.groupName}</option>);
								})
							}
						</select>
					</div>
					<div className="form-group text-right">
						<button className="btn btn-default" type="submit" disabled={this.props.isProgress} required>Добавить</button>
						<button className="btn btn-default" type="button"
								onClick={() => this.props.removeModal()}>Закрыть
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = function(store) {
	return {
		groups: store.groups,
		isProgress: store.users.isProgress
	};
};

export default connect(mapStateToProps)(modalAddUser);