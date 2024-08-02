import BtnLine from "@/components/buttonLine"
import Navbar from "@/components/navbar"
import GridServices from "@/components/gridServices"
import TestimoniCard from "@/components/testimoniCard"
import ButtonArrow from "@/components/buttonArrow"
import FooterCard from "@/components/footerCard"

export default function Labs() {
    return (
        <main>
            <div>
                <Navbar />
                <h1 className="text-lg text-bold">HELLO LABS</h1>
                <BtnLine text="Contact Us" icon="/logo.svg" />
                <GridServices />
                
                <Testi />
                <div className="flex gap-5">
                    <ButtonArrow arrow="left" />
                    <ButtonArrow arrow="right" />
                </div>
                <FooterCard />
            </div>
        </main>
    )
}

function Testi () {
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
        <>
            {testimonials.map((testimoni) => {
                <TestimoniCard msg={testimoni.msg} picture={testimoni.picture} name={testimoni.name} job={testimoni.job} />
            })}
        </>
    )
}