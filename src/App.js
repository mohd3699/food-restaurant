import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { pagePaths } from './utils/constants';
import Welcome from './containers/Welcome';
import FoodMenus from './containers/FoodMenus';
import Checkout from './containers/Checkout';

function App() {
	return <Router>
		<Switch>
			<Route exact path={pagePaths.root} component={Welcome} />
			<Route path={pagePaths.foodMenus} component={FoodMenus} />
			<Route path={pagePaths.foodMenus} component={FoodMenus} />
			<Route path={pagePaths.checkout} component={Checkout} />
		</Switch>
	</Router>
}

export default App;
