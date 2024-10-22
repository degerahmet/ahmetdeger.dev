import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import logoPNG from "@/app/logo-2.png";

export default function TopBar() {
    return (
        <div className="fixed min-h-14 flex flex-1 z-10 bg-[#10141a2e] backdrop-blur-lg top-0 left-0 right-0 px-6 flex-row items-stretch justify-between border-b border-b-[#30363d] md:hidden">
            <Logo src={logoPNG} alt="logo" width={200} height={200} />
            <div className="w-7 justify-center flex items-center">
                <FontAwesomeIcon icon={faXTwitter} size="2xl" />
            </div>
        </div>
    )
}
