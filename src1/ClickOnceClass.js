import React from 'react';
import ReactDOM from 'react-dom';

class OneTimeButtonClass extends React.Component {
	state = {
		clicked: false
	}

	handleClick = () => {
		// the handler won't be called if the button is disabled
		this.props.onClick();
		this.setState({ clicked: true })
	}

	render() {
		return (
			<button
				onClick={this.handleClick}
				disabled={this.state.clicked}
			>
			You Can Only Click Me Once
			</button>
		);
	}
}

{ /*
ReactDOM.render(
	<OneTimeButtonClass onClick={() => alert("hi")} />,
	document.querySelector('#root')
);
*/ }

export default OneTimeButtonClass;
