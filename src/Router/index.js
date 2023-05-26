import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import WebView from '../Components/WebView';
import Frame1 from '../Components/Frame1';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/webview"><WebView /></Route>
				<Route exact path="/frame1"><Frame1 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;