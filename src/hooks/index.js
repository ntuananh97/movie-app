import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const usePrevious = (value) => {
    const ref = useRef()
    useEffect(() => { ref.current = value })
  
    return ref.current
  }
  

// runs action(location) on location, i.e. route, change
export const useLocationChange = (action) => {
  const location = useLocation();
  const prevLocation = usePrevious(location)
  useLayoutEffect(() => {
    action(location, prevLocation);
  }, [location]);
};

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    const [width] = size;
    return {
        isMobile: width < 768,
        isTablet: width >= 768 && width < 992,
        size
    };
  }

 /**
* Hook that alerts clicks outside of the passed ref
*/
export function useOutsideAlerter(ref, callback) {
 useEffect(() => {
   
   function handleClickOutside(event) {
     if (ref.current && !ref.current.contains(event.target)) {
        callback()
     }
   }
   // Bind the event listener
   document.addEventListener("mousedown", handleClickOutside);
   return () => {
     // Unbind the event listener on clean up
     document.removeEventListener("mousedown", handleClickOutside);
   };
 }, [ref]);
}

export const useGetQueryParams = () => {
  const [searchParams] = useSearchParams();
  const queryParams = useMemo(() => Object.fromEntries([...searchParams]), [searchParams])
  return queryParams
}