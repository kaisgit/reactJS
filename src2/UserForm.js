import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function UserForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const handleSubmit = event => {
		event.preventDefault();

		var emailValid, passwordValid = false;

		if (email.length === 0) {
			setEmailError('Email is required');
		} else if (email.length < 6) {
			setEmailError('Email should be minimum 6 characters');
		} else if(email.indexOf(' ') >= 0) {
			setEmailError('Email cannot contain spaces');
		} else {
			setEmailError('');
			emailValid = true;
		}

		if (password.length === 0) {
			setPasswordError('Password is required');
		} else if (password.length < 6) {
			setPasswordError('Password should be minimum 6 characters');
		} else {
			setPasswordError('');
			passwordValid = true;
		}

		if (emailValid && passwordValid) {
			// clear the fields upon sucessful submit. also bind 'state' values to <form.control values={...}> to clear out.
			console.log('Email: ' + email + ', Password: ' + password);
			setEmail('');
			setPassword('');
		}
	}


	return (
		<div>
			<h5><u>In UserForm.js:</u></h5>

			<Form onSubmit={handleSubmit}>
  				<Form.Group controlId="formBasicEmail">
    				<Form.Label>Email address</Form.Label>
    				<Form.Control type="email" placeholder="Enter email" onChange={event=>setEmail(event.target.value)} value={email} />
  				</Form.Group>
	
  				<Form.Group controlId="formBasicPassword">
    				<Form.Label>Password</Form.Label>
    				<Form.Control type="password" placeholder="Password" onChange={event=>setPassword(event.target.value)} value={password} />
  				</Form.Group>

				{emailError.length > 0 &&
					<Alert variant="danger">{emailError}</Alert>}
				{passwordError.length > 0 &&
					<Alert variant="danger">{passwordError}</Alert>}
	
  				<Button variant="primary" type="submit">
    				Submit
  				</Button>
			</Form>

			Email entered: {email} <br />
			Password entered: {password}

		</div>
	);
}

export default UserForm;
