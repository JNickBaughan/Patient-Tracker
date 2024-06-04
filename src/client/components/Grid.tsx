import React, { ReactElement, useState, useEffect } from "react";

export interface GridProps<T> {
    data: T[] | null | undefined;
    buildRow: (item: T, index: number, arr: T[]) => ReactElement;
    countPerPage: number;
}

export const Grid = <T extends unknown>({ data, buildRow, countPerPage }: GridProps<T>) => {

    var [localData, setLocalData] = useState(data);
    var [pageNumber, setPageNumber] = useState(1);
    var [visibleRecords, setVisibleRecords] = useState(localData?.slice((pageNumber - 1), countPerPage));

    useEffect(() => {
        setLocalData(data);
        setPageNumber(1);
        setVisibleRecords(data?.slice((pageNumber - 1), countPerPage));
    }, [data, countPerPage])

    return (<>
            {visibleRecords?.map(buildRow)}
            <div className="border-top-bold pagination">
                <span><i className="arrow left"></i><i className="arrow left"></i></span> 
                <span><i className="arrow left"></i></span>
                    <span className="pagination-count">{`${countPerPage} out of ${data?.length} Records`}</span>
                <span><i className="arrow right"></i></span>
                <span><i className="arrow right"></i><i className="arrow right"></i></span> 
            </div>
            </>)
}