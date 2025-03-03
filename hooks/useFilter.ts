import { useMemo } from "react";

function useFilter<T>(
  array: T[],
  key: keyof T,
  value: any,
  limit: number
): T[] {
  return useMemo(() => {
    return array.filter((item) => item[key] === value).slice(0, limit);
  }, [array, key, value, limit]);
}

export default useFilter;


