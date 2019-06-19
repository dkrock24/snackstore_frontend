import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route ,Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Product from './components/Product';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Navbar/>			
					
			<Route exact path="/:handle" component={App}  />
			
			<Route exact path="/" component={App}  />

		</div>
	</BrowserRouter>
	, document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log("hola ", `${process.env.PUBLIC_URL}/public/assets/image/log.png`);
