import React from 'react';

// Props Drilling - makes it easier to pass data between nested props.
// createContext() does not hold any of its own state. It's for passing props.
// createContext() returns an object with 2 properties: {Provider, Consumer}
// Provider/Consumer are bound together. They only know how to talk to each other.

import ContextComponent from "./ComponentUseContext";
import ReducerComponent from "./ComponentUseReducer";

const renderReducerHook = () => {
  return <ReducerComponent />;
};

const renderContextHook = () => {
  return <ContextComponent />;
};

function PropsDrilling() {
	return (
		<div className="box">
			<div><h5><u>useReducer() example in useContext/ComponentUseReducer.js:</u></h5></div>
         {renderReducerHook()}
			<div><h5><u>useContext() example in useContext/ComponentUseContext.js:</u></h5></div>
         {renderContextHook()}
      </div>
	);
}

export default PropsDrilling;
