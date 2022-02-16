import { useEffect, useRef } from 'react';
import './App.css';

export const UseFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            console.log("duration is " + duration);
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);
    if (typeof duration !== "number" || typeof delay !== "number") { return };
    return { ref: element, style: { opacity: 0 } };
}