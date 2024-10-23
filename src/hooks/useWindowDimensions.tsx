'use client';

import {useState, useEffect} from 'react'

const findScreenSize = (width:number) => {
    if (width <= 640){
        return 'sm';
    } else if (width > 640 && width <= 768){
        return 'md';
    } else if (width > 768 && width <= 1024){
        return 'lg';
    } else if (width > 1024 && width <= 1280){
        return 'xl';
    } else {
        return '2xl';
    }
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : null,
        height: typeof window !== 'undefined' ? window.innerHeight : null
    });

    const [screenSize, setScreenSize] = useState(typeof window !== 'undefined' ? findScreenSize(window.innerWidth): null)

    useEffect(()=> {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        if (typeof window !== 'undefined'){   
            window.addEventListener("resize", handleResize);
            setScreenSize(findScreenSize(window.innerWidth))
        }
        return () => window.removeEventListener("resize", handleResize)
    }, [windowDimensions.width, screenSize]);

    return screenSize;
}

export default useWindowDimensions;