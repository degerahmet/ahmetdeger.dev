"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useWindowDimensions from "@/hooks/useWindowDimensions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faFolderClosed, faHouse } from "@fortawesome/free-solid-svg-icons";

import Logo from "@/components/Logo";
import longLogo from "@/app/logo-2.png";
import shortLogo from "@/app/logo.png";

export default function Sidebar() {
    const screenSize = useWindowDimensions();
    const [logo, setLogo] = useState('short')

    useEffect(() => {
        switch (screenSize) {
            case 'sm':
                setLogo('short')
                break;
            case 'md':
                setLogo('short')
                break;
            case 'lg':
                setLogo('short')
                break;
            case 'xl':
                setLogo('long')
                break;
            case '2xl':
                setLogo('long')
                break;
            default:
                break;
        }
    }, [window.innerWidth])

    return (
        <div className="hidden md:block bg-[#00000085] border-r border-r-[#30363d] md:min-w-20 lg:min-w-60 flex flex-col font-normal">
            <div className="flex flex-col p-5">
                <Logo src={logo === 'long' ? longLogo : shortLogo} alt="logo" width={logo === 'long' ? 200 : 50} height={logo === 'long' ? 200 : 50} />
            </div>
            <div className="flex flex-col p-5">
                <ul className="list-none">
                    <Link href='/'>
                        <li className="leading-10 my-2 hover:bg-sky-700 rounded-full p-2 hover:font-bold">
                            <FontAwesomeIcon icon={faHouse} size="xl" />
                            <span className="pl-3 hidden lg:inline-block">Home</span>
                        </li>
                    </Link>
                    <Link href='/projects'>
                        <li className="leading-10 my-2 hover:bg-sky-700 rounded-full p-2 hover:font-bold">
                            <FontAwesomeIcon icon={faFolderClosed} size="xl" />
                            <span className="pl-3 hidden lg:inline-block">Projects</span>
                        </li>
                    </Link>
                    <Link href='/blog'>
                        <li className="leading-10 my-2 hover:bg-sky-700 rounded-full p-2 hover:font-bold">
                            <FontAwesomeIcon className="pr-2" icon={faBookmark} size="xl" />
                            <span className="pl-3 hidden lg:inline-block">Blog</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
