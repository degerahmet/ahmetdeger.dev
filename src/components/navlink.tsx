import { NavlinkProps } from "@/props/components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Navlink({ type, href, icon, iconSize, navText }: NavlinkProps) {
  return (
    <Link href={href}>
      <li className="leading-10 my-2 hover:bg-sky-700 rounded-full p-2 hover:font-bold">
        <FontAwesomeIcon icon={icon} size={iconSize} />
        {type === 'side' ? <span className="pl-3 hidden lg:inline-block">{navText}</span>  : <></> }
      </li>
    </Link>
  )
}
