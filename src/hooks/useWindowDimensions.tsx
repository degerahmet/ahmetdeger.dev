'use client'
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
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [screenSize, setScreenSize] = useState(findScreenSize(window.innerWidth))

    useEffect(()=> {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleResize);
        setScreenSize(findScreenSize(windowDimensions.width))
        return () => window.removeEventListener("resize", handleResize)
    }, [window.innerWidth]);

    return screenSize;
}

export default useWindowDimensions;