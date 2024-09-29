import Navbar from "@/components/ui/navbar"
import "./globals.css"
import background from "../assets/bg.jpg"
import Image from "next/image"
import TeamCard from "@/components/ui/teamcard"
import placeholder from "../assets/profile.png"
import daniel from "../assets/daniel.png"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="h-[60px] w-full flex items-center justify-center ">
                <h1 className="text-xl sm:text-2xl">Flood Relief Network</h1>
            </div>
            <Image src={background} alt="background" loading={"lazy"} className="w-full max-h-[750px] object-cover object-center" />

            <h1 className="text-center mt-5 text-2xl ">Our Team</h1>
            <div className="my-5 flex flex-wrap w-fit justify-center mx-auto gap-5">
                <TeamCard
                    name="Junghoon Yu"
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook="Junghoon Yu"
                    instagram="yungyooon"
                    mail="jhoony9960@gmail.com"
                    image={placeholder}
                />
                <TeamCard
                    name="Seoyeon Yu"
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook="Seoyeon Yu"
                    instagram="shkoyeon"
                    mail="seoyeonyu0412@gmail.com"
                    image={placeholder}
                />
                <TeamCard
                    name="Thomas Choi"
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook=":("
                    instagram="thomas._.cho1"
                    mail=":("
                    image={placeholder}
                />
                <TeamCard
                    name="Daniel Yang"
                    position="it director"
                    bio="My hobbies are photography and programming. I like to collect figurines, and my favorite movie is Good Will Hunting."
                    facebook="Daniel Yang"
                    instagram="@danielwzyang"
                    mail="danielwzyang@gmail.com"
                    image={daniel}
                />
            </div>
        </div>
    )
}