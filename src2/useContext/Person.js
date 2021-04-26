import React, { useContext, useState } from 'react';

const employeeContext = React.createContext();

function Person() {
	// eslint-disable-next-line 
	const [employee, setEmployee] = useState({Id: 101, Name: 'Jason', Salary: 12345});

	return (
		<div>
			<h5><u>In useContext/Person.js:</u></h5>
			<employeeContext.Provider value={employee}>
				<Employee></Employee>
			</employeeContext.Provider>
		</div>
	);
}

function Employee() {
	const context = useContext(employeeContext);

	return (
		<div>
			<h5>In Employee Component</h5>
				<span><label>Employee ID: <b>{ context.Id }</b></label></span><br />
				<span><label>Employee Name: <b>{ context.Name }</b></label></span><br />

				<Salary></Salary>
		</div>
	);
}

function Salary() {
   const context = useContext(employeeContext);

   return (
      <div>
         <h5>In Salary Component</h5>
            <span><label>Employee ID: <b>{ context.Id }</b></label></span><br />
            <span><label>Employee Salary: <b>{ context.Salary }</b></label></span>
      </div>
   );
}

export default Person;
