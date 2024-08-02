import Image from "next/image"
import { gilroyBold } from "@/app/layout"

export default function BtnLine({text, icon}) {
    return (
        <main>
            <div className="py-2.5 px-4 border-2 border-solid border-black rounded-full w-max flex items-center gap-3 cursor-pointer hover:shadow-lg">
                <p className={`${gilroyBold.className}`}>{text}</p>
                <Image
                    src={icon}
                    width={32}
                    height={32}
                    alt="Snapstudio Logo"
                />
            </div>
        </main>
        
    )
    
}