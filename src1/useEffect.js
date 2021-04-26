import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';

// useEffect runs after the initial render
const LogEffect = () => {
	const [text, setText] = useState('');

	useEffect(() => {
		console.log('latest value:', text);
	});

	return (
		<input value={text} onChange={e=>setText(e.target.value)} />
	);
};

// focus an input control upon first render
function App() {
	// store a reference to the input's DOM node
	const inputRef = useRef();
	const [value, setValue] = useState("");

	useEffect(
		() => {
			console.log('render');
			inputRef.current.focus();
		},
		// the effect "depends on" inputRef
		[inputRef]
	);

	return (
		<input ref={inputRef} value={value} onChange={e=>setValue(e.target.value)}/>
	);
}

//fetching data and displaying it
export function Reddit() {
	const [posts, setPosts] = useState([]);

	// useEffect runs after the initial render
	useEffect(() => {
		fetch("https://www.reddit.com/r/reactjs.json")
			.then(res => res.json())
			.then(json =>
			// Save the posts into state
			setPosts(json.data.children.map(c => c.data))
		)
	});

	return (
		<ul>
			{posts.map(post => (
				<li key={post.id} > {post.title} </li>
			))}
		</ul>
	);
}

{ /*
ReactDOM.render(
	//<LogEffect/>,
	//<App/>,
	<Reddit/>,
	document.querySelector('#root')
);
*/ }

export default LogEffect;

