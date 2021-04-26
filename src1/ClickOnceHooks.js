import React from 'react';
import ReactDOM from 'react-dom';

/* React Class components can hold state, function components can't
	Hooks make it possible for function components to hold state. */
function OneTimeButton({ onClick }) {
	const [clicked, setClicked] = React.useState(false);

	const handleClick = () => {
		onClick();
		setClicked(true) // no more clicking
	};

	return (
		<button onClick={handleClick} disabled={clicked}>
			You Can Only Click Me Once
		</button>
	);
}

{ /*
ReactDOM.render(
	<OneTimeButton onClick={() => alert("hi")} />,
	document.querySelector('#root')
);
*/ }

export default OneTimeButton;
