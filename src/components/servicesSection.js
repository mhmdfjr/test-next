import GridServices from "@/components/gridServices"
import Image from "next/image"
import { thunderBold } from "@/app/layout"

export default function ServicesSection() {
    return (
        <section id="services" className="services w-full flex justify-center items-center px-20">
            <div className="flex gap-x-28 justify-center ">
                <div className="flex flex-col gap-10">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#FAAA3E] opacity-10"></div>
                    <p className={`text-[64px] font-bold ${thunderBold.className}`}>Our Services</p>
                    <div className="flex flex-col gap-6 text-2xl">
                        <p>Fashion Photography</p>
                        <p>Portrait Photography</p>
                        <p>Commercial Photography</p>
                        <p>Fine Art Photography</p>
                    </div>
                </div>
                <div className="ml-[114px]">
                    <GridServices />
                </div>
                <Image
                    src="/shape1.svg"
                    width={500}
                    height={500}
                    alt="Snapstudio Logo"
                    className="absolute left-40"
                />
            </div>
        </section>
    )
}