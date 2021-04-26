import React, { useContext, useState, useEffect } from 'react';
import { TodosContext } from './ToDo';

import { Table, Form, Button } from 'react-bootstrap';

import useAPI from './useAPI';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

function ToDoList() {
	// receive state and dispatch from ToDo.js
	const { state, dispatch } = useContext(TodosContext);
	//console.log(state);

	const [todoText, setTodoText] =  useState('');
	const [editMode, setEditMode] = useState(false);
	const [editTodo, setEditTodo] = useState(null);
	const buttonTitle = editMode ? "Edit" : "Add";

   // read README file on how to start the json server
	const endpoint = 'http://localhost:3000/todos/';
	const savedTodos = useAPI(endpoint);

	useEffect(() => {
     dispatch({ type: 'get', payload: savedTodos})
	}, [savedTodos]) // dispatch whenever savedTodos changes.

	const handleSubmit = async event => {
		event.preventDefault();

		if (editMode) {
			await axios.patch(endpoint+editTodo.id, {text: todoText})
			dispatch({ type: 'edit', payload: {...editTodo, text: todoText}})
			setEditMode(false)
			setEditTodo(null)
		} else {
			const newToDo = {id: uuidv4(), text: todoText}
			//const response = await axios.post(endpoint, newToDo)
			await axios.post(endpoint, newToDo)

			dispatch({ type: 'add', payload: newToDo })
		}

		setTodoText('') // to clear field after adding
	}

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formBasicTodo">
					<Form.Control
						type="text"
						placeholder="Enter To Do"
						onChange={event => setTodoText(event.target.value)}
						value={todoText}
						/>
				</Form.Group>
				<Button variant="primary" type="submit">
					{ buttonTitle }
				</Button>
			</Form>

			<Table striped bordered hover>
				<thead>
					<tr>
					<th>To Do</th>
					<th>Edit</th>
					<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{ state.todos.map(todo => (
							<tr key={todo.id}>
								<td>{ todo.text }</td>
								<td
									onClick={ () => {
										setTodoText(todo.text)
										setEditMode(true)	
										setEditTodo(todo)
										}}>
								<Button variant="link">Edit</Button></td>
								<td
									onClick={async () => {
										await axios.delete(endpoint + todo.id)
                              dispatch({type: 'delete', payload: todo})
										}}>
								<Button variant="link">Delete</Button></td>
							</tr>
					))}
				</tbody>
			</Table>
		</div>
	)
}
	
export default ToDoList;
