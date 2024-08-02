import Image from "next/image"
import { thunderBold } from "@/app/layout"

export default function Headline() {
    return (
        <div className="w-full">
                <div className="w-full flex justify-center">
                <Image
                    src="/images/headline.png"
                    width={800}
                    height={800}
                    alt="Snapstudio Logo"
                    className="z-50"
                />
                <Image
                    src="/shape2.svg"
                    width={60}
                    height={60}
                    alt="Snapstudio Logo"
                    className="z-50 absolute left-20 top-40"
                />
                <Image
                    src="/shape2.svg"
                    width={60}
                    height={60}
                    alt="Snapstudio Logo"
                    className="z-50 absolute right-48 top-80"
                />
                </div>
                <div className="w-[450px] h-[450px] rounded-[60px] bg-[#FAAA3E] absolute top-[130px] left-72 -z-1"></div>
                <div className="w-[450px] h-[450px] rounded-[60px] bg-[#C5B4D8] absolute top-[262px] right-72 -z-1"></div>
                <div className="w-[100px] h-[100px] rounded-full bg-[#C97184] absolute top-[500px] left-40 -z-1"></div>
                <div className="w-[60px] h-[60px] rounded-full bg-[#C5B4D8] absolute top-[600px] left-56 -z-1"></div>
                <div className="w-[60px] h-[60px] rounded-full bg-[#C97184] absolute top-48 right-[500px] -z-1"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-[#FAAA3E] absolute top-48 right-[450px] -z-1"></div>
                <p className={`text-[300px] absolute top-20 left-20 ${thunderBold.className}`}>SNAP</p>
                <p className={`text-[300px] absolute top-80 right-20 ${thunderBold.className}`}>STUDIO</p>
                <p className="text-xl absolute top-[370px] right-[350px]">Where Cool Meets Capture.</p>
                <div className="absolute right-20 top-40 text-[#676C6F] flex flex-col items-center cursor-pointer z-50">
                    <p className="hover:font-bold">Scroll Down</p>
                    <Image
                        src="/arrow-right.svg"
                        width={40}
                        height={40}
                        alt="Snapstudio Logo"
                        className="rotate-90 opacity-70 transition-transform duration-300 ease-in hover:scale-125"
                    />
                </div>
        </div>
    )
}