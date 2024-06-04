import { ReactElement, useState, useEffect } from "react";

export interface GridProps<T> {
    data: T[] | null | undefined;
    buildRow: (item: T, index: number, arr: T[]) => ReactElement;
    countPerPage: number;
}

export const Grid = <T extends unknown>({ data, buildRow, countPerPage }: GridProps<T>) => {

    var [localData, setLocalData] = useState(data);
    var [pageNumber, setPageNumber] = useState(1);
    var [visibleRecords, setVisibleRecords] = useState(localData?.splice((pageNumber - 1), countPerPage));

    useEffect(() => {
        setLocalData(data);
        setPageNumber(1);
        setVisibleRecords(data?.splice((pageNumber - 1), countPerPage));
    }, [data])

    if(!!localData && localData?.length)
    {
        return "No Data";
    }

    return visibleRecords?.map(buildRow);

    
}