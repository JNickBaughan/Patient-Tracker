import React from "react";

import {  PatientDetails, PatientStats  } from "../../common/types/types";

export const Grid = ({ patient }: { patient: PatientDetails | null }) => {

    var getArrow = (inx: number, curr: number, prev?: number) => {
        
        if(inx === 0) { 
            return null;
        }
        
        if(!prev || curr === prev) { 
            return "-";
        }
        
        if(curr > prev!) {
            return (<i className="arrow up"></i>);
        }

        return (<i className="arrow down"></i>);
    }

    var heartRateRanges = [60, 73, 90];
    var getCssClass = (heartRate: number, ranges: number[]) => {
        if(heartRate <= ranges[0])
        {
            return " great"
        }

        if(heartRate >= ranges[1] && heartRate < ranges[2])
        {
            return " good"
        }

        if(heartRate >= ranges[2])
        {
            return " danger"
        }
        return ""
    }

    var buildRow = (s: PatientStats, inx: number, arr: PatientStats[]) => {
        const prevRow = inx !== 0 ? arr[inx - 1] : null;
        return (
            <div className={`flex-grid${inx !== 0 ? " border-top" : "" }`}>
                <div className="col">{new Date(s.date).toLocaleDateString()}</div>
                <div className={`col${getCssClass(s.heartRate, heartRateRanges)}`}>{s.heartRate} {getArrow(inx, s.heartRate, prevRow?.heartRate)}</div>
                <div className="col">{s.diastolic} {getArrow(inx, s.diastolic, prevRow?.diastolic)}</div>
                <div className="col">{s.systolic} {getArrow(inx, s.systolic, prevRow?.systolic)}</div>
            </div>
        )
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