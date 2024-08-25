import { usePathname, useSearchParams, useRouter } from 'next/navigation';

function useGetAllSearchParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const params: { [anyProp: string]: string } = {};

  const getAll = () => {
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params
  }

  const getItem = (item: string) => {
    return searchParams.get(item)
  }

  const setItem = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (key) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return {getAll, getItem, setItem};
};

export default useGetAllSearchParams;