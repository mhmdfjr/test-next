import Navbar from "@/components/navbar"
import Headline from "@/components/headline"

export default function HeroSection() {
    return (
        <section className="h-screen overflow-hidden px-20">
            <div className="mt-8">
                <Navbar />
            </div>
            <Headline />
        </section>
    )
}