import React from "react";
import { StrictMode } from 'react';
import ReactDOM from "react-dom";
import '../app.css';
import { Grid } from "./components/Grid";
import { InfiniteScroll } from "./components/InfiniteScroll";
import { PatientStatsRow } from "./components/PatientStatsRow";
import { PatientRow } from "./components/PatientRow";
import { PatientSlim, PatientDetails, PatientStats  } from "../common/types/types";

const App = () => {

	const [patientId, updatePatientId] = React.useState<number | null>(null);
	const [patient, updatePatient] = React.useState<PatientDetails | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	var loadPatients = React.useCallback(() => {
		async function fetchPatients() {
			const response = await fetch('patients', {
				method: "POST", 
				headers: {
				"Content-Type": "application/json",
				},
				body: JSON.stringify({}),
			});
			return await response.json();
		};

		return fetchPatients();

	}, [])



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
        return <PatientRow key={patient.id + '-slim'} patient={patient} index={index} onClick={(patient: PatientSlim) => { updatePatientId(patient.id)}} />
    }

	if(patient === null && !isLoading){
		return (<div className="main-container">
					<h1>Patients</h1>
					<InfiniteScroll loadData={loadPatients} buildContent={buildPatientRow} bottomPlaceholder={(<div>Fetching More Patients...</div>)} />
				</div>);
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

ReactDOM.render(  <StrictMode>
    <App />
  </StrictMode>, document.getElementById("root"));
