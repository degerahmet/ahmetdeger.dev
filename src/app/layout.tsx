'use client';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarkdown, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "@/components/Logo";
import longLogo from "@/app/logo-2.png";
import shortLogo from "@/app/logo.png";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { faBlog, faBookmark, faDiagramProject, faFolderClosed, faGamepad, faHome, faSave } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Ahmet Deger",
//   description: "Learn more about Ahmet Deger",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const screenSize = useWindowDimensions();
  const [logo, setLogo] = useState('short')

  useEffect(()=>{
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
  },[window.innerWidth])



  return (
    <html lang="en" className='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col md:flex-row h-screen">
          {/* Header */}
          <div className="fixed min-h-14 flex flex-1 z-10 bg-[#10141a2e] backdrop-blur-lg top-0 left-0 right-0 px-6 flex-row items-stretch justify-between border-b border-b-[#30363d] md:hidden">
            <Logo src={longLogo} alt="logo" width={200} height={200}/>
            <div className="w-7 justify-center flex items-center">
              <FontAwesomeIcon icon={faXTwitter} size="2xl"/>
            </div>
          </div>

          <div className="hidden md:block bg-[#00000085] border-r border-r-[#30363d] md:min-w-20 lg:min-w-60 flex flex-col font-normal">
            <div className="flex flex-col p-5">
              <Logo src={logo === 'long' ? longLogo : shortLogo} alt="logo" width={logo === 'long' ? 200 : 50} height={logo === 'long' ? 200 : 50}/>
            </div>
            <div className="flex flex-col p-5">
              <ul className="list-none">
                <Link href='/'>
                  <li className="leading-10 my-2 hover:bg-sky-700 rounded-full p-2 hover:font-bold">
                      <FontAwesomeIcon icon={faHome} size="xl"/>
                      <span className="pl-3 hidden lg:inline-block">Home</span>
                  </li>
                </Link>
                <Link href='/'>
                  <li className="leading-10 my-2 hover:bg-sky-700 rounded-full p-2 hover:font-bold">
                      <FontAwesomeIcon icon={faFolderClosed} size="xl"/>
                      <span className="pl-3 hidden lg:inline-block">Projects</span>
                  </li>
                </Link>
                <Link href='/'>
                  <li className="leading-10 my-2 hover:bg-sky-700 rounded-full p-2 hover:font-bold">
                      <FontAwesomeIcon className="pr-2" icon={faBookmark} size="xl"/>
                      <span className="pl-3 hidden lg:inline-block">Blog</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          

          <main className="flex-1 overflow-y-auto p-5">
            {children}
          </main>
          <footer className="py-8 bg-gray-700 text-center text-white md:hidden block">

          </footer>
        </div>
      </body>
    </html>
  );
}
