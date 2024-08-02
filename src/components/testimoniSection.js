import TestimoniCard from "./testimoniCard"
import ButtonArrow from "./buttonArrow"
import { thunderBold } from "@/app/layout";

export default function TestimoniSection() {
    const testimonials = [
        {
            msg:"Snap Studio captured the essence of my moments with impeccable skill, delivering stunning photos beyond my expectations.",
            picture:"/images/profil.png",
            name:"Celine A.",
            job:"Entrepreneur" 
        },
        {
            msg:"From the moment I walked in, the atmosphere was incredibly inviting, and the staff was warm and professional.",
            picture:"/images/profil2.png",
            name:"Austin B.",
            job:"Model" 
        },
        {
            msg:"Snap Studio exceeded my expectations with their exceptional creativity, capturing moments that will be cherished forever.",
            picture:"/images/profil3.png",
            name:"Selina L.",
            job:"Entrepreneur" 
        },
    ];
    return (
        <section id="testimonials" className="" >
            <div className="px-20 flex flex-col gap-10">
                <div className="flex justify-between">
                    <p className={`text-[64px] font-bold ${thunderBold.className}`}>Testimonials</p>
                    <div className="flex gap-6">
                        <ButtonArrow arrow="left" />
                        <ButtonArrow arrow="right" />
                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <TestimoniCard msg={testimonials[0].msg} picture={testimonials[0].picture} name={testimonials[0].name} job={testimonials[0].job} />
                    <TestimoniCard msg={testimonials[1].msg} picture={testimonials[1].picture} name={testimonials[1].name} job={testimonials[1].job} />
                    <TestimoniCard msg={testimonials[2].msg} picture={testimonials[2].picture} name={testimonials[2].name} job={testimonials[2].job} />
                </div>
            </div>
        </section>
    )
}