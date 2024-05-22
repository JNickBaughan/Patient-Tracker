import React from "react";
import ReactDOM from "react-dom";
import '../app.css';
import { Grid } from "./components/Grid";
import { PatientSlim, PatientDetails  } from "../common/types/types";

const App = () => {

	const [patients, updatePatients] = React.useState<PatientSlim[]>([]);
	const [patientId, updatePatientId] = React.useState<number>(1);
	const [patient, updatePatient] = React.useState<PatientDetails | null>(null);

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

	

	return (<div className="main-container"><Grid patient={patient} /></div>);
};

ReactDOM.render(<App />, document.getElementById("root"));
