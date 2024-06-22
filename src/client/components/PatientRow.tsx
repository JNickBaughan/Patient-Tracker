import React from "react";

import { PatientSlim  } from "../../common/types/types";

export const PatientRow = ({ patient, onClick }: { patient: PatientSlim, index: number, onClick: (patient: PatientSlim) => void; }) => {

    return (
        <div className="avatar-card-wrapper" onClick={() => { onClick(patient) }}>
        <div className="avatar-card" >
            <div className="profile">
                <div className="circular-image-container">
                    <img className="circular-image" src={patient.photoUrl} alt="patient photo" />
                </div>
                <h4>{patient.firstName + " " + patient.lastName}</h4>
            </div>
            <div className="profile-details">
                <p><span className="detail">Last Visit:</span> Jan 29, 1780</p>
                <p><span className="detail">Age:</span> {patient?.age}</p>
            </div>
        </div>
    </div>
    )

}