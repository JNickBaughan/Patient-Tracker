import React, { ReactElement, useState, useEffect, useRef }  from "react";

export interface GridProps<T> {
    loadData: () => Promise<T[]> | null | undefined;
    buildContent: (item: T, index: number, arr: T[]) => ReactElement;
    bottomPlaceholder: JSX.Element | string | (() => JSX.Element) ;
}

export const InfiniteScroll =  <T extends unknown>({  loadData, buildContent, bottomPlaceholder }: GridProps<T>) => {
   
    const [localData, setLocalData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [needToFetchData, setNeedToFetchData] = useState(true);

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const bottomPlaceholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(scrollContainerRef?.current !== null){
            const onscroll = () => {
                if(bottomPlaceholderRef?.current && scrollContainerRef?.current){
                    const { bottom, height, top } = bottomPlaceholderRef?.current?.getBoundingClientRect();
                    const containerRect = scrollContainerRef?.current?.getBoundingClientRect();

                    const isReachBottom = top <= containerRect.top ? containerRect.top - top <= height : bottom - containerRect.bottom <= height;
                    if (isReachBottom) {
                        setNeedToFetchData(true);
                    }
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
                !!results && setLocalData([...localData, ...results]);
                setIsLoading(false);
                setNeedToFetchData(false);
            }
		}
        
        needToFetchData && fetchData();
        
	  }, [loadData, needToFetchData]);




    return (<div className="infinite-scroll" ref={scrollContainerRef}>
                {isLoading && localData?.length === 0 && <div className="loader" />}
                {localData?.map(buildContent)}
                {localData?.length !== 0 && (<div ref={bottomPlaceholderRef}>{typeof bottomPlaceholder === 'function' ? bottomPlaceholder() : bottomPlaceholder}</div>)}
            </div>)
}