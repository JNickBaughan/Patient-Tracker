import React from "react";
import ReactDOM from "react-dom";

import { PatientSlim  } from "../common/types/types";

const App = () => {

	const [patients, updatePatients] = React.useState<PatientSlim[]>([]);
	const [patientId, updatePatientId] = React.useState<number>(-1);
	const [patient, updatePatient] = React.useState<PatientSlim | null>(null);

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
	  
	  }, []);

	  React.useEffect(() => {

		const fetchData = async () => {
			const response = await fetch(`patients/${patientId}`, {
				method: "GET", 
				headers: {
				  "Content-Type": "application/json",
				}
			  });
		  updatePatient(await response.json());
		}

		patientId !== -1 && fetchData();

	  }, [patientId]);

	  if(patient && patient?.id){
		return (
			<div>
				<p>First: {patient.firstName}</p>
				<p>Last: {patient.lastName}</p>
				<p>Age: 43</p>
			</div>)
	  }

	

	return (<div>
				{patients.map(m => (<p onClick={() => { updatePatientId(m.id)}}>{m.firstName} {m.lastName}</p>))}
			</div>);
};

ReactDOM.render(<App />, document.getElementById("root"));
