import { NavlinkProps } from "../props/components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Navlink({ type, href, icon, iconSize, navText }: NavlinkProps) {
  return (
    <Link href={`${href}`}>
      <li className="transition ease-in-out delay-25 leading-10 my-2 hover:bg-slate-900 rounded-full p-2 text-lg flex flex-row hover:-translate-y-1 hover:scale-110 duration-300">
        <span className="pl-2 flex flex-none w-14 self-center justify-center items-center">
          <FontAwesomeIcon icon={icon} size={iconSize} />
        </span>
        {type === 'side' ? <span className="flex-initial hidden lg:inline-block">{navText}</span>  : <></> }
      </li>
    </Link>
  )
}
