import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';

const InputExample = () => {
	const [text, setText] = useState('hello');

	const handleChange = event => {
		let text = event.target.value;

		// setText(event.target.value);
		// does not allow user to enter numbers in input box.
		setText(text.replace(/[0-9]/g, ''));
	};

	return (
		<input type="text" value={text} onChange={handleChange} />
	);
}

const RefInput = () => {
	const input = useRef();
	const showValue = () => {
		alert(`Input contains: ${input.current.value}`);
	};
	return (
		<div>
			<input type="text" ref={input} />
			<button onClick={showValue} > Alert the Value! </button>
		</div>
	);
};

{ /*
ReactDOM.render(
	//<InputExample/>,
	<RefInput/>,
	document.querySelector('#root')
);
*/ }

export default RefInput;

