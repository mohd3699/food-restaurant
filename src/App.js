import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { pagePaths } from './utils/constants';
import Welcome from './containers/Welcome';
import FoodMenus from './containers/FoodMenus';
import Checkout from './containers/Checkout';
import Summary from './Summary';

function App() {
	return <Router>
		<Switch>
			<Route exact path={pagePaths.root} component={Welcome} />
			<Route path={pagePaths.foodMenus} component={FoodMenus} />
			<Route path={pagePaths.orderSummary} component={Summary} />
			<Route path={pagePaths.checkout} component={Checkout} />
		</Switch>
	</Router>
}

export default App;
