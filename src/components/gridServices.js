import Image from "next/image"

export default function GridServices() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
                <div className="w-[491px] h-[320px] rounded-[32px] overflow-hidden flex items-center hover:shadow-lg">
                    <Image
                        src="/images/services1.jpeg"
                        width={491}
                        height={320}
                        alt="Services"
                        className="transition-transform duration-300 ease-in hover:scale-125"
                    /> 
                </div>
                <div className="w-[288px] h-[320px] rounded-[32px] overflow-hidden flex items-center hover:shadow-lg">
                    <Image
                        src="/images/services2.jpeg"
                        width={288}
                        height={320}
                        alt="Services"
                        className="transition-transform duration-300 ease-in hover:scale-125"
                    />
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <div className="w-[187px] h-[240px] rounded-[32px] overflow-hidden flex items-center hover:shadow-lg">
                    <Image
                        src="/images/services2.jpeg"
                        width={187}
                        height={240}
                        alt="Services"
                        className="transition-transform duration-300 ease-in hover:scale-125"
                    /> 
                </div>
                <div className="w-[592px] h-[240px] rounded-[32px] overflow-hidden flex items-center hover:shadow-lg">
                    <Image
                        src="/images/services4.jpeg"
                        width={592}
                        height={240}
                        alt="Services"
                        className="transition-transform duration-300 ease-in hover:scale-125"
                    />
                </div>
            </div>
        </div>
    )
}