import React from "react";
import ReactDOM from "react-dom";

const App = () => {

	const [patients, updatePatients] = React.useState([]);
	const [patient, updatePatient] = React.useState({});

	React.useEffect(() => {
		
		const fetchData = async () => {
		  const response = await fetch('patients', {
			method: "POST", 
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		  });
		  updatePatients(await response.json());
		}

		fetchData();
	  
	  }, [])

	  if(patient?.id){
		return (
			<div>
				<p>First: {patient.firstName}</p>
				<p>Last: {patient.lastName}</p>
				<p>Age: 43</p>
			</div>)
	  }

	

	return (<div>
				{patients.map(m => (<p onClick={() => { updatePatient(m)}}>{m.firstName} {m.lastName}</p>))}
			</div>);
};

ReactDOM.render(<App />, document.getElementById("root"));
