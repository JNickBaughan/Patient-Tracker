import React from "react";
import ReactDOM from "react-dom";

const App = () => {

	const [patients, updatePatients] = React.useState([]);

	React.useEffect(() => {
		
		const fetchData = async () => {
		  
		  const response = await fetch('patients', {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify({}), // body data type must match "Content-Type" header
		  });
		 
		  updatePatients(await response.json());
		}

		fetchData();
	  

	  }, [])

	

 return (<div>
     		{patients.map(m => (<p>{m.firstName} {m.lastName}</p>))}
   		</div>);
};

ReactDOM.render(<App />, document.getElementById("root"));
