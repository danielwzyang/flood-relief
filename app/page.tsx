import Navbar from "@/components/ui/navbar"
import "./globals.css"
import background from "../assets/bg.jpg"
import Image from "next/image"
import TeamCard from "@/components/ui/teamcard"
import placeholder from "../assets/profile.png"
import daniel from "../assets/daniel.png"
import Events from "@/components/ui/events"

interface apiData {
    items: { start: { date: string }, summary: string, description?: string }[]
}

export default async function Home() {
    let response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR}/events?key=${process.env.API_KEY}`, {
        next: { revalidate: 60 }
    })
    let data: apiData = await response.json()

    return (
        <div>
            <Navbar name="Flood Relief Network"/>
            <Image src={background} alt="background" loading={"lazy"} className="w-full max-h-[80vh] object-cover object-center" />
            
            <Events items={data.items}/>

            <h1 className="text-center mt-10 text-2xl ">Our Team</h1>
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
                    position="vice president"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook="Seoyeon Yu"
                    instagram="shkoyeon"
                    mail="seoyeonyu0412@gmail.com"
                    image={placeholder}
                />
                <TeamCard
                    name="Thomas Choi"
                    position="vice president"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook=":("
                    instagram="thomas._.cho1"
                    mail=":("
                    image={placeholder}
                />
                <TeamCard
                    name="Ethan Pak"
                    position="financial director"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook=":("
                    instagram="eethanp_"
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