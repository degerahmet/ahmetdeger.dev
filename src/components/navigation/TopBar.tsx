import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoPNG from "@/assets/images/logo-2.png";
import Link from "next/link";
import { socialMediaLinks } from "../../constants/social-links";

export default function TopBar() {
    return (
        <div className="fixed min-h-14 flex flex-1 z-10 bg-[#10141a2e] backdrop-blur-lg top-0 left-0 right-0 px-6 flex-row items-stretch justify-between border-b border-b-[#30363d] md:hidden">
            <Logo src={logoPNG} alt="logo" width={200} height={200} />
            <div className="w-40 justify-between flex items-center">
                {
                    socialMediaLinks.map((socialMediaLink, index) => {
                        return (
                            <Link key={index} href={socialMediaLink.url} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={socialMediaLink.icon} size="2xl" />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
