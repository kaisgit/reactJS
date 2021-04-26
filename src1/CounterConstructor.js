import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Child({ onAction }) {
	return (
		<button onClick={onAction}>
		Increment
		</button>
	);
}

// class with a constructor
class CountingParent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actionCount: 0
		};

		this.handleIncrement = this.handleIncrement.bind(this);
	}

	handleIncrement(action) {
		this.setState({
			actionCount: this.state.actionCount + 1
		});
	}

	handleDecrement(action) {
		this.setState({
			actionCount: this.state.actionCount - 1
		});
	}

	handleReset(action) {
		this.setState({
			actionCount: 0
		});
	}

	render() {
		return (
			<div>
				<Child onAction={this.handleIncrement}/>
				<button onClick={(e) => this.handleDecrement(e)}>Decrement</button>
				<button onClick={(e) => this.handleReset(e)}>Reset</button>

				<p>Clicked {this.state.actionCount} times</p>
			</div>
		);
	}
}

/* Every instance of Component has its own state, each will have its own counter independently of the others */
const Page = () => (
	<div>
		<CountingParent/>
		<CountingParent/>
		<CountingParent/>
	</div>
);

{ /*
ReactDOM.render(
	<CountingParent/>,
   //<Page/>,
	document.querySelector('#root'));
*/ }

export default CountingParent;


