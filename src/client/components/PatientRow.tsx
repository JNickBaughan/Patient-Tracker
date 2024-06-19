import React from "react";

import { PatientSlim  } from "../../common/types/types";

export const PatientRow = ({ patient, onClick }: { patient: PatientSlim, index: number, onClick: (patient: PatientSlim) => void; }) => {

    return (
        <div className={"patient-card flex-grid"} onClick={() => { onClick(patient) }}>
            <div className="col left-padding flex-grid">
             <div className="block">
             {/* https://imagekit.io/blog/lazy-loading-images-complete-guide/ */}
                <img className="portrait" src={patient.photoUrl} alt="External Image" />
             </div>
            </div>
            <div className="col">
                <div>42 years old</div>
                <div>{patient.firstName + " " + patient.lastName}</div>
            </div>
        </div>
    )

}