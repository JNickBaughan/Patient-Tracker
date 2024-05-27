import React, { ReactElement, useState, useEffect } from "react";

export interface GridProps<T> {
    data: T[] | null;
    buildRow: (item: T, index: number, arr: T[]) => ReactElement;
    countPerPage: number;
}

export const Grid = <T extends unknown>({ data, buildRow, countPerPage }: GridProps<T>) => {

    var [localData, setLocalData] = useState(data);
    var [pageNumber, setPageNumber] = useState(1);
    var [visibleRecords, setVisibleRecords] = useState(localData?.splice((pageNumber - 1), countPerPage));

    useEffect(() => {
        debugger;
        setLocalData(data);
        setPageNumber(1);
        setVisibleRecords(localData?.splice((pageNumber - 1), countPerPage));
    }, [data])

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
                visibleRecords?.map(buildRow)
            }
        </>)
}