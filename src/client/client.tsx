import React from "react";
import ReactDOM from "react-dom";
import '../app.css';
import { Grid } from "./components/Grid";
import { Row } from "./components/Row";
import { PatientSlim, PatientDetails, PatientStats  } from "../common/types/types";

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
			  var result = await response.json();
		  updatePatient(result);
		}

		patientId !== -1 && fetchData();

	  }, [patientId]);

	  var buildRow = (stats: PatientStats, index: number, arr: PatientStats[]) => {
        const prevStats = index !== 0 ? arr[index - 1] : null;
        return <Row stats={stats} prevStats={prevStats} index={index} />
    }

	return (<div className="main-container">
		        <h1>Patient Stats</h1>
                <div className="flex-grid header border-bottom-bold">
                    <div className="col">Date</div>
                    <div className="col flex-grid-thirds">Heart Rate</div>
                    <div className="col">Diastolic</div>
                    <div className="col">Systolic</div>
                </div>
				<Grid data={patient?.stats ?? []} buildRow={buildRow} countPerPage={5} />
		</div>);
};

ReactDOM.render(<App />, document.getElementById("root"));
