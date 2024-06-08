import React from "react";

import { PatientSlim  } from "../../common/types/types";

export const PatientRow = ({ patient, index, onClick }: { patient: PatientSlim, index: number, onClick: (patient: PatientSlim) => void; }) => {

    return (
        <div className={`flex-grid${index !== 0 ? " border-top" : "" }`} onClick={() => { onClick(patient) }}>
            <div className="col">{patient.id}</div>
            <div className="col">{patient.firstName + " " + patient.lastName}</div>
            
        </div>
    )

}