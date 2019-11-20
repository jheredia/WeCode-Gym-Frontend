import React from 'react';
import './App.css';
import Login from './components/login/Login'
import RestorePass from './components/restorePass/RestorePass'
import {
	BrowserRouter as Router,
	Route,
	Link,
	RouteComponentProps
  } from "react-router-dom";

function Index() {
	return <h2>Home</h2>;
} 

type TParams =  { id: string };

function Product({ match } : RouteComponentProps<TParams>) {
	return <h2>This is a page for product with ID: {match.params.id} </h2>;
}

function AppRouter() {
	return (
		<Router>
		<div>
			<nav>
			<ul>
				<li>
				<Link to="/">Home</Link>
				</li>
				<li>
				<Link to="/login">Login</Link>
				</li>
			</ul>
			</nav>
	
			<Route path="/" exact component={Index} />
			<Route path="/products/:id" component={Product} />
			<Route path="/login" component={Login} />
			<Route path="/restorePass" component={RestorePass} />
		</div>
		</Router>
	);
}

export default AppRouter;