import React from "react";

import {  PatientDetails  } from "../../common/types/types";

export const Grid = ({ patient }: { patient: PatientDetails | null }) => {
    return (
        <>
            <h1>Patient Stats</h1>
            <div className="flex-grid header border-bottom-bold">
                <div className="col">Date</div>
                <div className="col flex-grid-thirds">Heart Rate</div>
                <div className="col">Diastolic</div>
                <div className="col">Systolic</div>
            </div>
            {
                patient?.stats?.map((s, inx) => (
                    <div className={`flex-grid${inx !== 0 ? " border-top" : "" }`}>
                        <div className="col">{s.date}</div>
                        <div className="col flex-grid-thirds">{s.heartRate}</div>
                        <div className="col">{s.diastolic}</div>
                        <div className="col">{s.systolic}</div>
                    </div>
                ))
            }
        </>)
}