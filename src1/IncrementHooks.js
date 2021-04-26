import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

/* React Class components can hold state, function components can't
   Hooks make it possible for function components to hold state. */
function StepTracker() {
   const [steps, setSteps] = useState(0);

   function increment() {
      setSteps(steps => steps+1)
   }

   return (
      <div>
         Today you've taken {steps} steps.<br />
         <button onClick={increment}>I took another step</button>
      </div>
   );
}


function ExampleHooks() {
  // declare a new state variable, count.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


{ /*
ReactDOM.render(
	//<StepTracker/>,
	<ExampleHooks/>,
	document.querySelector('#root')
);
*/ }

export default ExampleHooks;
