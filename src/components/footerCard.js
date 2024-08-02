import Image from "next/image"
import BtnLine from "./buttonLine"
import { thunderBold } from "@/app/layout"

export default function FooterCard() {
    return (
        <div className="py-7 px-16 bg-[#C5B4D8] rounded-3xl flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <p className={`text-[64px] font-bold ${thunderBold.className}`}>Get In Touch With Snapstudio.</p>
                <div className="relative p-4 bg-white rounded-full">
                    <BtnLine text="Send Partnership Proposal" icon="/arrow.svg" />
                </div>
            </div>
            <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-2">
                    <p className="text-[18px] font-bold">Our Headquarter:</p>
                    <div className="text-[18px] flex flex-col gap-2">
                        <p>Jend. Soedirman Street, no.19</p>
                        <p>Semarang City, 52219.</p>
                    </div>
                </div>
                <div className="">
                    <ul className="flex gap-2 justify-center items-center">
                        <li><Image src="/social1.svg" width={40} height={40} alt="Snapstudio Logo" /></li>
                        <li><Image src="/social2.svg" width={40} height={40} alt="Snapstudio Logo" /></li>
                        <li><Image src="/social3.svg" width={40} height={40} alt="Snapstudio Logo" /></li>
                        <li><Image src="/social4.svg" width={40} height={40} alt="Snapstudio Logo" /></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="text-end text-[#0A181F]">Copyright © 2024 SNAPSTUDIO. All Rights Reserved.</p>
            </div>
        </div>
    )
}