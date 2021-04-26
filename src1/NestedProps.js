import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// "Children" prop is great to use for components that need to be generic placeholders, like Nav, Sidebar, and Body. Nav and Sidebar accept a children prop. Body doesn't take a prop name 'children' but it has two 'slots' that it renders to the page.

const UserAvatar = ({ user, size }) => (
	<img 
		className={`user-avatar ${size || ''}`}
		alt="user avatar"
		src={user.avatar}
	/>
);

const UserStats = ({ user }) => (
	<div className="user-stats">
		<div><UserAvatar user={user} /> {user.name} </div>
		<div className="stats">
			<div>Followers: {user.followers}</div>
			<div>Following: {user.following}</div>
		</div>
	</div>
);

/*
const Nav = ({ user }) => (
	<div className="nav">
		<UserAvatar  user={user} size="small" />
	</div>
);
*/
const Nav = ({ children }) => (
	<div className="nav">{ children }</div>
);

const Content = () => (
	<div className="content">main content here</div>
);

/*
const Sidebar = ({ user }) => (
	<div className="sidebar"><UserStats user={user}/></div>
);
*/
const Sidebar = ({ children }) => (
	<div className="sidebar">{ children }</div>
);

/*
const Body = ({ user }) => (
	<div className="body">	
		<Sidebar user={user}/>
		<Content user={user}/>
	</div>
);
*/
const Body = ({ sidebar, content }) => (
	<div className="body">
		<Sidebar>{sidebar}</Sidebar>
		{content}
	</div>
);

class NestedProps extends React.Component {
	state = {
		user: {
			avatar: 'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b',
			name: 'John',
			followers: 1234,
			following: 123
		}
	};

	render() {
		const { user } = this.state;

		return (
			<div className="app">
				//<Nav user={user}/>
				//<Body user={user}/>

				<Nav> <UserAvatar user={user} size="small" /> </Nav>
				<Body sidebar={<UserStats user={user}/>}
						content={<Content/>}
				/>
			</div>
		);
	}
}


{ /*
ReactDOM.render(
	<NestedProps/>,
	document.querySelector('#root')
);
*/ }

export default NestedProps;


