import React, { ReactElement, useState, useEffect, useCallback } from "react";

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

    useEffect(() => setVisibleRecords(localData?.slice((pageNumber - 1), countPerPage)), [pageNumber])

    var displayCountText = useCallback(() => {
        var isVisibleCountLessThanCount = countPerPage > (visibleRecords?.length ?? -1);
        return `${isVisibleCountLessThanCount ? visibleRecords?.length : countPerPage } out of ${data?.length} Records`
    }, [countPerPage, visibleRecords]);
    // TODO - deactivate arrow controls when no more pages
    return (<>
                {visibleRecords?.map(buildRow)}
                <div className="border-top-bold pagination">
                    <span><i onClick={() => setPageNumber(pageNumber - 1)} className="arrow left"></i></span>
                        <span className="pagination-count">{displayCountText()}</span>
                    {<span><i onClick={() => setPageNumber(pageNumber + 1)} className="arrow right"></i></span>}
                </div>
            </>)
}