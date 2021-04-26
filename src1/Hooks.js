import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

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


// Declare state variable with initial state value
const DeclareStateVar = () => {
	const [count] = useState(100)
	return <div>State variable is {count}</div>
}

// Update state variable
const UpdateStateVar = () => {
	const [age, setAge] = useState(19)
	const handleClick = () => setAge(age+1)

	return (
		<div>
			Today I am {age} years old.
			<div>
				<button onClick={handleClick}>Get older!</button>
			</div>
		</div>
	)
}

// Update multiple state variables
const MultipleStateVars = () => {
	const [age, setAge] = useState(19)
	const [siblingsNum, setSiblingsNum] = useState(10)

	const handleAge = () => setAge(age+1)
	const handleSiblingsNum = () => setSiblingsNum(siblingsNum+1)

	return (
		<div>
      	<p>Today I am {age} Years of Age</p>
      	<p>I have {siblingsNum} siblings</p>

      	<div>
        	<button onClick={handleAge}> Get older! </button>
        <button onClick={handleSiblingsNum}> More siblings! </button>
      </div>
    </div>
  )
}

// Update multiple object state variables. Use an object as the intial value
const StateObject = () => {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 })
  const handleClick = val =>
    setState({
      ...state,
      [val]: state[val] + 1
    })
  const { age, siblingsNum } = state

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, 'age')}>Get older!</button>
        <button onClick={handleClick.bind(null, 'siblingsNum')}>
          More siblings!
        </button>
      </div>
    </div>
  )
}

// useEffect
const BasicEffect = () => {
  const [age, setAge] = useState(0)
  const handleClick = () => setAge(age + 1)

  useEffect(() => {
    document.title = 'You are ' + age + ' years old!'
  })

  return <div>
    <p>Look at the title of the current tab in your browser </p>
    <button onClick={handleClick}>Update Title!! </button>
  </div>
}


{ /*
ReactDOM.render(
	<StepTracker/>,
	document.querySelector('#root')
);
*/ }

export default StepTracker;


