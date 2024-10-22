import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faFolderClosed, faBookmark } from "@fortawesome/free-solid-svg-icons"

export default function Footbar() {
    return (
        <div className="min-h-10 text-center text-white md:hidden block bg-[#00000085] border-t border-t-[#30363d] fixed bottom-0 left-0 right-0">
            <ul className="list-none flex flex-row justify-between px-10">
                <Link href='/'>
                    <li className="leading-10 my-2 rounded-full p-2 hover:font-bold">
                        <FontAwesomeIcon icon={faHouse} size="2xl" />
                    </li>
                </Link>
                <Link href='/projects'>
                    <li className="leading-10 my-2 rounded-full p-2 hover:font-bold">
                        <FontAwesomeIcon icon={faFolderClosed} size="2xl" />
                    </li>
                </Link>
                <Link href='/blog'>
                    <li className="leading-10 my-2 rounded-full p-2 hover:font-bold">
                        <FontAwesomeIcon className="pr-2" icon={faBookmark} size="2xl" />
                    </li>
                </Link>
            </ul>
        </div>
    )
}
