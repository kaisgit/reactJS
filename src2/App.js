import React, { useContext, useReducer } from 'react';
import Products from './Products';
//import Rating from './Rating';

import 'bootstrap/dist/css/bootstrap.min.css';
//import {Button} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import BoxCard from './BoxCard';
import UserForm from './UserForm';
import GitHub from './GitHub';

import { UserContext } from './index';

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const initialState = {
	count: 0
}

//reducer will take some state, and figure out what to do with our state.
function countReducer(state, action) {
	switch(action.type) {
		case "increment":
			return {count : state.count + 1}
		case "decrement":
			return {count : state.count - 1}
		case "reset":
			return initialState
		default:
			return initialState
	}
}

function App() {
	const user = {
		firstName: 'Greg',
		lastName: 'Doe',
	};
	const isValid = true; //disable button if isValid=false

	const value = useContext(UserContext);

	const [state, dispatch] = useReducer(countReducer, initialState);

	return (
		<div>
			<h5><u>In App.js:</u></h5>
			Passing argument to function():
			<ul>Hello, {formatName(user)}</ul>

			<hr />
			userContext() example:
			<ul>This value "{value}" is passed from index.js using userContext()</ul>

         <hr />
			useReducer() example:
			<ul>
         Count: {state.count} <br />
         <Button onClick={()=> dispatch({type: 'increment'})}>
            Increment
         </Button>
         <Button variant="secondary" onClick={()=> dispatch({type: 'decrement'})}>
            Decrement
         </Button>
         <Button variant="success" onClick={()=> dispatch({type: 'reset'})}>
            Reset
         </Button>
			</ul>

			<hr />
			<Button variant="primary" disabled={!isValid}>Default</Button>

			<hr />
			<Products />

			{ /*
			<Rating rating='1' />
			<Rating rating='2' />
			<Rating rating='3' />
			<Rating rating='4' />
			<Rating rating='5' />
			*/ }

			<hr />
			<BoxCard>
				This sentence in App.js is displayed using "props.children" in BoxCard.js
			</BoxCard>

			<hr />
			<UserForm />

			<hr />
			<GitHub />

		</div>
	);
};

export default App;
