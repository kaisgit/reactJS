import React, { useReducer } from 'react';

import ToDoList from './ToDoList';

//import { v4 as uuidv4 } from 'uuid';

export const TodosContext = React.createContext()

//const todosInitialState = {
	//todos:
		//[
			//{id: 1, text: 'finishing writing hooks chapter'},
			//{id: 2, text: 'play with kids'},
			//{id: 3, text: 'read bible'},
		//]
//};

//JSON
const todosInitialState = {
	todos:[]
};

// reducer() always returns a new state to replace the old state rather than modifying the existing state.
function todosReducer(state, action) {
	switch(action.type) {
		case 'get':
			return {...state, todos: action.payload}
		case 'add':
			//const newToDo = { id: uuidv4(), text: action.payload }
			//const addedToDos = [...state.todos, newToDo]

			const addedToDos = [...state.todos, action.payload ]
			//creates a copy of existing 'state'. leave 'state' unchanged.
			//return a new state (todos) 
			return {...state, todos: addedToDos}
		case 'delete':
			const filteredTodoState = state.todos.filter( todo => todo.id !== action.payload.id)
			return {...state, todos: filteredTodoState}
		case 'edit':
			const updatedToDo = {...action.payload}
			const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
			const updatedToDos = [
				...state.todos.slice(0,updatedToDoIndex),
				updatedToDo,
				...state.todos.slice(updatedToDoIndex + 1)
			];
			return {...state, todos: updatedToDos}
		default:
			return todosInitialState
	}
}

function ToDo() {
	const [state, dispatch] = useReducer(todosReducer, todosInitialState)

	return (
		<TodosContext.Provider value={{state, dispatch}}>
			<ToDoList />
		</TodosContext.Provider>
	)
}

export default ToDo;
