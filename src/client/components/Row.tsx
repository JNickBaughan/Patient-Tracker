import React from "react";

import { PatientStats  } from "../../common/types/types";

export const Row = ({ stats, prevStats, index  }: { stats: PatientStats, prevStats: PatientStats | null, index: number }) => {

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

    return (
        <div className={`flex-grid${index !== 0 ? " border-top" : "" }`}>
            <div className="col">{new Date(stats.date).toLocaleDateString()}</div>
            <div className={`col${getCssClass(stats.heartRate, heartRateRanges)}`}>{stats.heartRate} {getArrow(index, stats.heartRate, prevStats?.heartRate)}</div>
            <div className="col">{stats.diastolic} {getArrow(index, stats.diastolic, prevStats?.diastolic)}</div>
            <div className="col">{stats.systolic} {getArrow(index, stats.systolic, prevStats?.systolic)}</div>
        </div>
    )

}