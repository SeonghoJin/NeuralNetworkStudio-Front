// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Dashboard, Landing, LoginPage, NewProject, Profile, Signup } from './routes/index';
import ProjectRouter from './Router/ProjectRouter';
import PrivateAuthentication from './Authentication/PrivateAuthentication';
import Authentication from './Authentication';

function App() {
	return (
		<BrowserRouter>
			<Authentication>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={Signup} />
					<PrivateAuthentication>
						<Route path="/project" component={ProjectRouter} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/newProject" component={NewProject} />
						<Route path="/profile" component={Profile} />
					</PrivateAuthentication>
				</Switch>
			</Authentication>
		</BrowserRouter>
	);
}

export default App;
