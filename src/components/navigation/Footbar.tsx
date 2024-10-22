import { pages } from '@/constants/pages'
import Navlink from "@/components/navlink"

export default function Footbar() {
    return (
        <div className="min-h-10 text-center text-white md:hidden block bg-[#00000085] border-t border-t-[#30363d] fixed bottom-0 left-0 right-0">
            <ul className="list-none flex flex-row justify-between px-10">
                {pages.map((page, index) => {
                    return (
                        <Navlink key={index} type='foot' href={page.href} icon={page.icon} iconSize="xl" navText={page.title} />
                    )
                })}
            </ul>
        </div>
    )
}
