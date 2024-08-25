import { usePathname, useSearchParams, useRouter } from 'next/navigation';

/**
 * Returns a coordinate from a given mouse or touch event
 * @param  {TouchEvent|MouseEvent|jQuery.Event} e    
 *         A valid mouse or touch event or a jQuery event wrapping such an
 *         event. 
 * @param  {string} [type="page"]
 *         A string representing the type of location that should be
 *         returned. Can be either "page", "client" or "screen".
 * @return {Point} 
 *         The location of the event
 */
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