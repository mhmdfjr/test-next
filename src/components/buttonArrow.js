import Image from "next/image";

export default function ButtonArrow({arrow}) {
    let arrowDirection = arrow;
    let arrowIcon;
    if (arrowDirection=="left") {
        arrowIcon = "/arrow-left.svg"
    } 
    else if (arrowDirection=="right") {
        arrowIcon = "/arrow-right.svg"
    }

    return (
        <div className="w-20 h-20 rounded-full bg-[#FAAA3E] flex justify-center items-center cursor-pointer hover:shadow-lg">
            <Image
                src={arrowIcon}
                width={64}
                height={64}
                alt={arrow}
            />
        </div>
    )
}