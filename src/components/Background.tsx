
import React from 'react'

type BackgroundProps = {
    children: React.ReactNode
}

export default function Background({children} : BackgroundProps) {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black from-0% via-neutral-700 via-100% to-black to-100%">
            {children}
        </div>
    )
}