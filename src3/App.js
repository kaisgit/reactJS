import React from 'react';
import ReactDOM from 'react-dom';

import Counter1 from './Counter1';
import Counter2 from './Counter2';

function App() {
	return (
		<div>
			<hr />
			useState():
			<ul><Counter1 /></ul>

			<hr />
			useReducer():
			<ul><Counter2 /></ul>


		</div>
	)
}

export default App;
