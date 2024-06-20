import React, { ReactElement, useState, useEffect, useRef }  from "react";

export interface GridProps<T> {
    loadData: () => Promise<T[]> | null | undefined;
    buildContent: (item: T, index: number, arr: T[]) => ReactElement;
    bottomPlaceholder: JSX.Element;
}

export const InfiniteScroll =  <T extends unknown>({ loadData, buildContent, bottomPlaceholder }: GridProps<T>) => {
   
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [needToFetchData, setNeedToFetchData] = useState(true);

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(scrollContainerRef?.current !== null){
            const onscroll = () => {
                const isReachBottom = scrollContainerRef?.current?.scrollTop === ((scrollContainerRef?.current?.scrollHeight ?? 0) - (scrollContainerRef?.current?.offsetHeight ?? 0));
                if (isReachBottom) {
                    setNeedToFetchData(true);
                }
              };
              scrollContainerRef.current.addEventListener("scroll", onscroll);

              return () => {
                scrollContainerRef?.current?.removeEventListener("scroll", onscroll);
            };
        }
      }, []);

    useEffect(() => {
		const fetchData = async () => {
            if(loadData){
                setIsLoading(true);
                var results: T[] | null | undefined = await loadData();
                !!results && setData([...data, ...results]);
                setIsLoading(false);
                setNeedToFetchData(false);
            }
		}
        
        needToFetchData && fetchData();
        
	  }, [loadData, needToFetchData]);




    return (<div className="infinite-scroll" ref={scrollContainerRef}>
                {isLoading && data?.length === 0 && <div className="loader" />}
                {data?.map(buildContent)}
                {data?.length !== 0 && (<div className="patient-card">Fetching More Patients...</div>)}
            </div>)
}