import Image from "next/image"
import { thunderBold } from "@/app/layout"

export default function BannerSection() {
    return (
        <section>
            <div className="w-full flex flex-col justify-center items-center gap-10">
                <span className={`w-[200%] text-[64px] text-[#E9EBED] font-bold text-center overflow-hidden ${thunderBold.className}`}>SNAPSTUDIO.  SNAPSTUDIO. SNAPSTUDIO. SNAPSTUDIO. SNAPSTUDIO. SNAPSTUDIO.</span>
                <div className="flex flex-col gap-10">
                    <ul className="flex justify-center items-center gap-8">
                        <li>Innovative Lighting Techniques</li>
                        <li><Image src="/shape3.svg" width={48} height={48} alt="Snapstudio Logo" /></li>
                        <li>Exclusive Prop Collection</li>
                        <li><Image src="/shape3.svg" width={48} height={48} alt="Snapstudio Logo" /></li>
                        <li>Professional Styling Services</li>
                    </ul>
                    <ul className="flex justify-center items-center gap-8">
                        <li>Exclusive Membership Programs</li>
                        <li><Image src="/shape3.svg" width={48} height={48} alt="Snapstudio Logo" /></li>
                        <li>Specialized Theme Packages</li>
                    </ul>
                </div>
                <span className={`w-[200%] text-[64px] text-[#E9EBED] font-bold text-center overflow-hidden ${thunderBold.className}`}>SNAPSTUDIO.  SNAPSTUDIO. SNAPSTUDIO. SNAPSTUDIO. SNAPSTUDIO. SNAPSTUDIO.</span>
                <div className="w-[450px] h-[450px] bg-[#C5B4D8] opacity-10 absolute rounded-full left-20 top-[600px]"></div>
            </div>
        </section>
    )
}