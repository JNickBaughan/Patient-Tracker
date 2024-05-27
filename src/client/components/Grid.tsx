import React from "react";

import {  PatientDetails, PatientStats  } from "../../common/types/types";

import { Row } from "./Row";

export const Grid = ({ patient }: { patient: PatientDetails | null }) => {

    var buildRow = (stats: PatientStats, index: number, arr: PatientStats[]) => {
        const prevStats = index !== 0 ? arr[index - 1] : null;
        return <Row stats={stats} prevStats={prevStats} index={index} />
    }

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
                patient?.stats?.sort((a, b) => new Date(a.date) - new Date(b.date))?.map(buildRow)
            }
        </>)
}