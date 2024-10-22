

export default function ResponsiveNavbar() {
    return (
        <nav className="sticky top-0 z-10 flex items-center justify-between w-full h-16 px-8 bg-neutral-800">
        <div className="flex items-center gap-4">
            <a href="#home" className="text-lg font-semibold text-neutral-100">Ahmet Deger</a>
            <div className="flex items-center gap-4">
            <a href="#about" className="text-lg font-semibold text-neutral-100">About</a>
            <a href="#projects" className="text-lg font-semibold text-neutral-100">Projects</a>
            <a href="#contact" className="text-lg font-semibold text-neutral-100">Contact</a>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <a href="" className="text-lg font-semibold text-neutral-100">Github</a>
            <a href="" className="text-lg font-semibold text-neutral-100">LinkedIn</a>
        </div>
        </nav>
    )
}