// This hook is temporary use for faking fetch data from localStorage
import { useCallback, useEffect, useRef, useState } from "react";
import type { Store } from "antd/es/form/interface";

interface UseFetchLocalStorageProps<DataType> {
  onCompleted?: (data: DataType) => void;
  key: string;
  emptyValue?: string;
}

const useFetchLocalStorage = <DataType = Store,>({
  key,
  onCompleted,
  emptyValue = "{}",
}: UseFetchLocalStorageProps<DataType>) => {
  const [data, setData] = useState<DataType>(JSON.parse(emptyValue));
  const onCompletedRef = useRef(onCompleted);

  const fetchData = useCallback(
    () => JSON.parse(localStorage.getItem(key) ?? emptyValue),
    [key, emptyValue]
  );

  const refetch = useCallback(() => {
    const data = fetchData();

    setData(data);

    return data;
  }, [fetchData]);

  useEffect(() => {
    const data = fetchData();
    setData(data);
    onCompletedRef.current?.(data);
  }, [fetchData]);

  return { data, refetch };
};

export default useFetchLocalStorage;
