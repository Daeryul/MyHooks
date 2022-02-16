import { useEffect, useRef } from 'react';

export const UseClick = (onClick) => {
    const element = useRef();
    if(typeof onClick !== "function") {
        return;
    }
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick)
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick)
            }
        };
    }, []);  
    return element;
}