import React from "react";

import { PatientSlim  } from "../../common/types/types";

export const PatientRow = ({ patient, onClick }: { patient: PatientSlim, index: number, onClick: (patient: PatientSlim) => void; }) => {

    return (
        <div className={"patient-card flex-grid"} onClick={() => { onClick(patient) }}>
            <div className="col left-padding flex-grid">
             <div className="block">
                <img className="portrait" src={patient.photoUrl} alt="patient photo" />
             </div>
            </div>
            <div className="col">
                <h6 className="patient-name">{patient.firstName + " " + patient.lastName}</h6>
                <p className="patient-detail">{patient.age} years old</p>
                <p className="patient-detail">Jan 29, 1780 last visit</p>
            </div>
        </div>
    )

}