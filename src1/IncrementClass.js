import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

{ /*
ReactDOM.render(
	<Example/>,
	document.querySelector('#root')
);
*/ }

export default Example;
