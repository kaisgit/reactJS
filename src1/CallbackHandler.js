import React from 'react';

// Callback Handlers - pass info up the component tree. 
// A - callback function gets introduced
// B - is used elsewhere
// C - calls back to the place is was introduced
const Callback = () => {
	const stories = [
   	{
   		title: 'React',
   		url: 'https://reactjs.org/',
   		author: 'Jordan Walke',
   		num_comments: 3,
   		points: 4,
   		objectID: 0,
   	},
   	{
   		title: 'Redux',
   		url: 'https://redux.js.org/',
   		author: 'Dan Abramov, Andrew Clark',
   		num_comments: 2,
   		points: 5,
   		objectID: 1,
   	},
	];

	// A
	const handleSearch = event => {
		//console.log(event.target.value);
		// C
		console.log(event.target.value);
	};

	return (
		<div>
			<Search onSearch={handleSearch} />
			<hr />

			<List list={stories} />
		</div>
	);
}

const Search = props => {
	const [searchTerm, setSearchTerm] = React.useState('');

	const handleChange = event => {
		setSearchTerm(event.target.value);

		// B
		props.onSearch(event);
	};

	return (
		<div>
			<label htmlFor="search">Search: </label>
			<input id="search" type="text" onChange={handleChange} />

			<p>Searching for <strong>{searchTerm}</strong></p>
		</div>
	);
};


//function List() {
	//return list.map(function(item) {
const List = props => (
	<ul>
	{props.list.map(item => (
		<li key={item.objectID}>
			<span><a href={item.url}>{item.title}</a> </span>
			<span>{item.author}</span>
			<span>{item.num_comments}</span>
			<span>{item.points}</span>
		</li>
	))}
	</ul>
);

export default Callback;
