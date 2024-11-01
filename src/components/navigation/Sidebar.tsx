"use client";

import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import Logo from "../Logo";
import longLogo from "@/assets/images/logo-2.png";
import shortLogo from "@/assets/images/logo.png";

import { pages } from '../../constants/pages'
import Navlink from "../navlink"
import { socialMediaLinks } from "@/constants/social-links";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    }, [screenSize])

    return (
        <div className="hidden md:block bg-[#00000085] border-r border-r-[#30363d] md:min-w-20 lg:min-w-60 flex flex-col font-normal p-5 items-stretch">
            <div className="z-[3] flex flex-1 flex-col h-full justify-between xl:items-stretch">
                <div className="flex flex-col items-center justify-center mb-5">
                    <Logo src={logo === 'long' ? longLogo : shortLogo} alt="logo" width={logo === 'long' ? 200 : 80} height={logo === 'long' ? 200 : 80} />
                </div>
                <div className="gap-3 flex flex-1 flex-col">
                    <ul className="list-none ">
                        {pages.map((page, index) => {
                            return (
                                <Navlink key={index} type='side' href={page.href} icon={page.icon} iconSize="xl" navText={page.title} />
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <ul className="list-none">
                        {socialMediaLinks.map((socialMediaLink, index) => {
                            return (
                                <Link key={index} href={`${socialMediaLink.url}`} target="_blank">
                                    <li className="transition ease-in-out delay-25 leading-10 my-2 hover:bg-slate-900 rounded-full p-2 text-lg flex flex-row hover:-translate-y-1 hover:scale-110 duration-300">
                                        <span className="pl-2 flex flex-none w-14 self-center justify-center items-center">
                                        <FontAwesomeIcon icon={socialMediaLink.icon} size='xl' />
                                        </span>
                                        <span className="flex-initial hidden lg:inline-block">{socialMediaLink.text}</span>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
