import React, { ReactElement, useState, useEffect, useCallback } from "react";

export interface GridProps<T> {
    data: T[] | null | undefined;
    buildRow: (item: T, index: number, arr: T[]) => ReactElement;
    countPerPage: number;
    isLoading: boolean;
}

export const Grid = <T extends unknown>({ data, buildRow, countPerPage, isLoading }: GridProps<T>) => {

    var [localData, setLocalData] = useState(data);
    var [pageNumber, setPageNumber] = useState(1);
    var [visibleRecords, setVisibleRecords] = useState(localData?.slice((pageNumber - 1), countPerPage));

    useEffect(() => {
        setLocalData(data);
        setPageNumber(1);
        setVisibleRecords(data?.slice((pageNumber - 1), countPerPage));
    }, [data, countPerPage])

    useEffect(() => { 
        var start = ((pageNumber - 1) * countPerPage);
        var end = (start + countPerPage);
        setVisibleRecords(localData?.slice(start, end))
    }, [pageNumber])

    var displayPageNumbers = useCallback(() => {
        var total = localData?.length ?? 0;
        var totalPageCount = Math.ceil(total / countPerPage);
        var pages: number[] = [];
        for(let i = 1; i <= totalPageCount; i++)
        {
            pages = [...pages, i];
        }
        return pages.map(p => (<span className={`page-number${p === pageNumber ? " selected" : ""}`} onClick={() => setPageNumber(p)}>{p}</span>));
    }, [countPerPage,  localData, pageNumber, setPageNumber]);

    var displayPaginationControls = useCallback(() => {
        var totalRecords = localData?.length ?? 0;
        if(totalRecords > countPerPage && totalRecords !== 0){
            return (<div className="border-top-bold pagination">
                <span className="navigation-control-arrow"><i onClick={() => setPageNumber(pageNumber - 1)} className="arrow left"></i></span>
                <span className="pagination-count">{displayPageNumbers()}</span>
                <span className="navigation-control-arrow"><i onClick={() => setPageNumber(pageNumber + 1)} className="arrow right"></i></span>
            </div>)
        }
    }, [countPerPage, localData, pageNumber])

    // TODO - deactivate arrow controls when no more pages
    return (<>
                <div className="grid">
                    {isLoading && <div className="loader"></div>}
                    {visibleRecords?.map(buildRow)}
                </div>
                {displayPaginationControls()}
            </>)
}