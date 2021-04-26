import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Context API - makes it easier to pass deeply nested props.
// createContext() does not hold any of its own state. It's for passing props.
// createContext() returns an object with 2 properties: {Provider, Consumer}
// Provider/Consumer are bound together. They only know how to talk to each other.
const UserContext = React.createContext();

const UserAvatar = ({ size }) => (
	<UserContext.Consumer>
	{user => (
		<img 
			className={`user-avatar ${size || ''}`}
			alt="user avatar"
			src={user.avatar}
		/>
	)}
	</UserContext.Consumer>
);

// Don't need the 'user' prop anymore. The Consumer fetches the user from context.
const UserStats = () => (
	<UserContext.Consumer>
	{user => (
		<div className="user-stats">
			<div><UserAvatar user={user} /> {user.name} </div>
			<div className="stats">
				<div>Followers: {user.followers}</div>
				<div>Following: {user.following}</div>
			</div>
		</div>
	)}
	</UserContext.Consumer>
);

// The components that once had the 'user' prop are no longer needed.
const Nav = ({ user }) => (
	<div className="nav">
		<UserAvatar size="small" />
	</div>
);

const Content = () => (
	<div className="content">main content here</div>
);

const Sidebar = () => (
	<div className="sidebar"><UserStats/></div>
);

const Body = () => (
	<div className="body">	
		<Sidebar/>
		<Content/>
	</div>
);

// make the context avail using the Provider
class NestedPropsContextAPI extends React.Component {
	state = {
		user: {
			avatar: 'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b',
			name: 'John',
			followers: 1234,
			following: 123
		}
	};

	render() {
		return (
			<div className="app">
				<UserContext.Provider value={this.state.user}>
					<Nav/>
					<Body/>
				</UserContext.Provider>
			</div>
		);
	}
}


{ /*
ReactDOM.render(
	<NestedPropsContextAPI/>,
	document.querySelector('#root')
);
*/ }

export default NestedPropsContextAPI;


