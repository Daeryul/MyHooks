import { useEffect } from 'react';
import './App.css';

export const UseBeforeLeave = (onBefore) => {
    const handle = (event) => {
        console.log(event);
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
    if (typeof onBefore !== "function") { return; }
};