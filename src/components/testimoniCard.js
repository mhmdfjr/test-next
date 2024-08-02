import Image from "next/image"

export default function TestimoniCard({msg, picture, name, job}) {

    return (
        <div className="flex flex-col gap-3.5 bg-[#C97184] bg-opacity-30 rounded-[32px] p-6 w-max hover:shadow-lg">
            <div>
                <p className="">{msg}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2.5 items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                            src={picture}
                            width={64}
                            height={64}
                            alt="Profile"
                        />
                    </div>
                    <div className="flex flex-col gap-1 justify-center">
                        <p className="text-[32px] font-bold">{name}</p>
                        <p>{job}</p>
                    </div>
                </div>
                <div className="">
                    <Image
                        src="/card.svg"
                        width={80}
                        height={64}
                        alt="Snapstudio Logo"
                        className=""
                    />
                </div>
            </div>
        </div>
    )
}