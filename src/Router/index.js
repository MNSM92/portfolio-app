import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import WebView from '../Components/WebView'; 


const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><WebView /></Route>
				
			</Switch>
		</Router>
	);
}
export default RouterDOM;