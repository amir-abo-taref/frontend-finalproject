import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./routing/PrivateRoute";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Meal from "./components/Meal";
import Dietserver from "./components/Deit";
import Memoryfood from "./components/MemoryGame";
import RecipeApp from "./components/Recipe";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<>
			<div className="App">
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Landing} />
						<PrivateRoute exact path="/dashboard" component={Dashboard} />
						<PrivateRoute exact path="/Meal" component={Meal} />
						<PrivateRoute exact path="/Diet" component={Dietserver} />
						<PrivateRoute exact path="/MemoryGame" component={Memoryfood} />
						<PrivateRoute exact path="/Recipe" component={RecipeApp} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="" component={NotFound} />
					</Switch>
				</Router>
			</div>
		</>
	);
}

export default App;
