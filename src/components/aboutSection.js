import Image from "next/image"
import { thunderBold } from "@/app/layout"

export default function AboutSection() {
    return (
        <section id="about" className="px-20">
            <div className="flex gap-28">
                <Image
                    src="/images/about.png"
                    width={391}
                    height={372}
                    alt="About Image"
                />
                <div className="flex flex-col gap-10">
                    <p className={`text-[64px] font-bold ${thunderBold.className}`}>About Us</p>
                    <p><span className={`text-2xl ${thunderBold.className}`}>SNAPSTUDIO.</span> is a cutting-edge photo studio that seamlessly blends creativity, technology, and professionalism to capture moments in the most captivating and visually stunning way possible. Nestled in the heart of the city, our studio is a haven for individuals seeking high-quality photography services for a wide range of occasions.</p>
                    <p>The talented team of photographers at Snap Studio is known for their creativity, attention to detail, and ability to capture the essence of each moment. From pre-shoot consultations to post-production editing, the staff ensures that every aspect of the photography process is handled with precision and care.</p>
                </div>
            </div>
        </section>
    )
}