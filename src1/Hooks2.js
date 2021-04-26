import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

// Example 1
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

// Example 2 - remove the function increment()
// works just as the same as Example 1
function StepTracker2() {
   const [steps, setSteps] = useState(0);

   return (
      <div>
         Today you've taken {steps} steps.<br />
         <button onClick={() => setSteps(steps => steps + 1)}>I took another step</button>
      </div>
   );
}


{ /*
ReactDOM.render(
	//<StepTracker/>,
	<StepTracker2/>,
	document.querySelector('#root')
);

*/ }

export default StepTracker2;
