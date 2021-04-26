import React from 'react';

const useSemiPersistentState = (key, initialState) => {
	const [value, setValue] = React.useState(
		localStorage.getItem(key) || initialState
	);

	React.useEffect(() => {
		localStorage.setItem(key, value);
	}, [value, key]);

	return [value, setValue];
};

//const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const SearchAPI = () => {
	const initialStories = [
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

	//const [searchTerm, setSearchTerm] = React.useState('React');
	const [searchTerm, setSearchTerm] = useSemiPersistentState(
		'search',
		'React'
	);

	const [stories, setStories] = React.useState(initialStories);

	const handleRemoveStory = item => {
		const newStories = stories.filter(
			story => item.objectID !== story.objectID
		);
		setStories(newStories);
	};

	const handleSearch = event => {
		//console.log(event.target.value);
		setSearchTerm(event.target.value);
	};

	// const searchedStories = stories.filter(function(story) {
	const searchedStories = stories.filter(story => {
		return story.title
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
	});
	//console.log(searchedStories);

	return (
		<div>
			<InputWithLabel
				id="search"
				value={searchTerm}
				isFocused
				onInputChange={handleSearch}
			>
			<strong>Search:</strong>
			</InputWithLabel>

			<hr />

			<List list={searchedStories} onRemoveItem={handleRemoveStory} />
		</div>
	);
}

//const Search = props => {
	//const {search, onSearch} = props;
//const Search = ({ search, onSearch }) => (
const InputWithLabel = ({ id, label, value, type='text', onInputChange, isFocused, children }) => {
	const inputRef = React.useRef();  // focus A

	React.useEffect(() => { // focus C
		if (isFocused) {
			inputRef.current.focus();
		}
	}, [isFocused]);

	return (
		<div>
			<label htmlFor={id}>{children}</label> &nbsp;
			<input
				ref={inputRef}    // focus B
				id={id}
				type={type}
				value={value}
				onChange={onInputChange} />
		</div>
	);
};


//function List() {
	//return list.map(function(item) {
//const List = props => (
const List = ({ list, onRemoveItem }) =>
	list.map(item => (
		<Item
		key={item.objectID}
		item={item}
		onRemoveItem={onRemoveItem}
		/>
));

const Item = ({ item, onRemoveItem }) => {
	function handleRemoveItem() {
		onRemoveItem(item);
	}

	return (
		<ul>
			<span><a href={item.url}>{item.title}</a> </span>
			<span>{item.author}, </span>
			<span>{item.num_comments}, </span>
			<span>{item.points}, </span>
			<span>
				<button type="button" onClick={() => onRemoveItem(item)}>
				Dismiss
				</button>
			</span>
		</ul>
	);
};

export default SearchAPI;
