import Image from "next/image"
import BtnLine from "./buttonLine"
import { thunderBold, gilroyBold } from "@/app/layout"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="w-full py-[14px] px-6 mx-auto flex gap-[120px] items-center justify-between rounded-full bg-[#C5B4D8]">
            <p className={`text-[32px] ${thunderBold.className}`}>SNAPSTUDIO.</p>
            <ul className="menu flex gap-[120px] font-semibold cursor-pointer">
                <li className={`menu-home ${gilroyBold.className}`}><Link href="/">Home</Link></li>
                <li className={`menu-services ${gilroyBold.className}`}><Link href="#services">Services</Link></li>
                <li className={`menu-about ${gilroyBold.className}`}><Link href="#about">About Us</Link></li>
                <li className={`menu-testimonial ${gilroyBold.className}`}><Link href="#testimnonials">Testimonials</Link></li>
            </ul>
            <BtnLine text="Contact Us" icon="/contact.svg" />
        </div>
    )
};