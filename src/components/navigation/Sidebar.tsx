"use client";

import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import Logo from "../Logo";
import longLogo from "../../app/logo-2.png";
import shortLogo from "../../app/logo.png";

import { pages } from '../../constants/pages'
import Navlink from "../navlink"
import { socialMediaLinks } from "@/constants/social-links";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

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
    }, [])

    return (
        <div className="hidden md:block bg-[#00000085] border-r border-r-[#30363d] md:min-w-20 lg:min-w-60 flex flex-col font-normal p-5 items-stretch">
            <div className="z-[3] flex flex-1 flex-col h-full justify-between xl:items-stretch">
                <div className="flex flex-col">
                    <Logo src={logo === 'long' ? longLogo : shortLogo} alt="logo" width={logo === 'long' ? 200 : 50} height={logo === 'long' ? 200 : 50} />
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
                        <Navlink type='side' href={socialMediaLinks.X} icon={faXTwitter} iconSize="xl" navText={`Follow`} />
                        <Navlink type='side' href={socialMediaLinks.X} icon={faGithub} iconSize="xl" navText={`GitHub`} />
                        <Navlink type='side' href={socialMediaLinks.X} icon={faLinkedin} iconSize="xl" navText={`Connect`} />
                    </ul>
                </div>
            </div>
        </div>
    )
}
