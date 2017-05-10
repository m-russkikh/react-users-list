import React, {Component} from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames'
import Toolbar from '../toolbar'
import * as userApi from '../../api/api';
import store from '../../store';

class UserListContainer extends Component {
	constructor(props, context) {
		super(props, context);

		this.currentScrollTop = 0;
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		userApi.getUsers();
		userApi.getGroups();

		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	handleScroll(e) {
		let scrollTop = e.srcElement.body.scrollTop;
		let state = this.props.users;
		let page = state.page;
		let order = state.sort[state.sort.current];

		if (page === 1) {
			this.currentScrollTop = 0;
		}

		if (this.props.users.isProgress) return;
		if (this.currentScrollTop >= scrollTop) return;
		if (e.srcElement.body.scrollHeight - scrollTop > window.screen.height * 1.2) return;

		this.currentScrollTop = scrollTop;

		userApi.updateUsers(++page, state.currentGroup, state.sort.current, order);
	}

	render() {
		return (
			<div className="container-fluid">
				<h1>Список пользователей</h1>
				<Toolbar sort={this.props.users.sort}
						 isProgress={this.props.users.isProgress}
						 groups={this.props.groups} currentGroup={this.props.users.currentGroup}/>

				<h3 className={classnames("text-danger", this.props.users.errorText === "" && "hidden")}>
					{this.props.users.errorText}
				</h3>

				<div className="data-list">
					{this.props.users.users.map(user => {
						return (
							<div key={user.id} className="data-list-item">
								<div className="details">{"[" + user.group + "] " + user.name + " " + user.surname} </div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};

const mapStateToProps = function(store) {
	return {
		users: store.users,
		groups: store.groups
	};
};

export default connect(mapStateToProps)(UserListContainer);
