import React from "react";
import ReactDOM from "react-dom";
import '../app.css';
import { Grid } from "./components/Grid";
import { PatientStatsRow } from "./components/PatientStatsRow";
import { PatientRow } from "./components/PatientRow";
import { PatientSlim, PatientDetails, PatientStats  } from "../common/types/types";

const App = () => {

	const [patients, updatePatients] = React.useState<PatientSlim[]>([]);
	const [patientId, updatePatientId] = React.useState<number | null>(null);
	const [patient, updatePatient] = React.useState<PatientDetails | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [patientIsLoading, setPatientIsLoading] = React.useState<boolean>(false);

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
		  setPatientIsLoading(false);
		}
		setPatientIsLoading(true);
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
			  var result = await response.json();
			updatePatient(result);
			setIsLoading(false);
		}

		if(patientId !== null)
		{
			setIsLoading(true);
			fetchData();
		} 

	  }, [patientId]);

	  var buildPaientDetailRow = (stats: PatientStats, index: number, arr: PatientStats[]) => {
        const prevStats = index !== 0 ? arr[index - 1] : null;
        return <PatientStatsRow stats={stats} prevStats={prevStats} index={index} />
    }

	var buildPatientRow = (patient: PatientSlim, index: number) => {
        return <PatientRow patient={patient} index={index} onClick={(patient: PatientSlim) => { updatePatientId(patient.id)}} />
    }

	if(patient === null && !isLoading){
		return (<div className="main-container">
			<h1>Patients</h1>
			<Grid data={patients ?? []} buildRow={buildPatientRow} countPerPage={5} isLoading={patientIsLoading} />
		</div>)
	}

	return (<div className="main-container">
		        <h1>Patient Stats  <span onClick={() => updatePatient(null)}>X</span></h1>
                <div className="flex-grid header border-bottom-bold">
                    <div className="col">Date</div>
                    <div className="col flex-grid-thirds">Heart Rate</div>
                    <div className="col">Diastolic</div>
                    <div className="col">Systolic</div>
                </div>
				<Grid data={patient?.stats ?? []} buildRow={buildPaientDetailRow} countPerPage={5} isLoading={isLoading} />
		</div>);
};

ReactDOM.render(<App />, document.getElementById("root"));
