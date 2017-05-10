import React, {Component} from 'react';
import { HashRouter, Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div className="home-page">
				<h1>React приложение "Список пользователей"</h1>
				<p>
					Для того, чтобы перейти к списку пользователей нажмите <HashRouter><Link to="/users">сюда</Link></HashRouter>.
				</p>
			</div>
		);
	}
};
