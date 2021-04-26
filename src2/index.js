import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './todo/ToDo';

import PropsDrilling from './useContext/PropsDrilling';
import Person from './useContext/Person';
import Main from './useContext/Main';

// Props Drilling - makes it easier to pass data between nested props.
// createContext() does not hold any of its own state. It's for passing props.
// 					 returns an object with 2 properties: {Provider, Consumer}
// Provider/Consumer are bound together. They only know how to talk to each other.
//const UserContext = React.createContext();
//const username = 'Greg';

export const UserContext = createContext();

ReactDOM.render(
   <div>
      <h5><u>Starting from index.js:</u></h5>

		<h5><u>In todo/Todo.js:</u> (Run json server first)</h5>
		<ToDo />

		<UserContext.Provider value={ "Anomymous User" }>
			<Main />
		</UserContext.Provider>

		<hr />
		<Person />

		<hr />
		<PropsDrilling />

		<hr />
		<UserContext.Provider value={ "Jack Doe" }>
			<App />
		</UserContext.Provider>

   </div>,
   document.getElementById('root')
);

//export default UserContext;

