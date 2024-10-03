import Navbar from "@/components/ui/navbar"
import "./globals.css"
import background from "../assets/bg.jpg"
import Image from "next/image"
import Events from "@/components/ui/events"
import Team from "@/components/ui/team"

interface apiData {
    items: { start: { date: string }, summary: string, description?: string }[]
}

export default async function Home() {
    const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR}/events?key=${process.env.API_KEY}`, {
        next: { revalidate: 60 }
    })
    const data: apiData = await response.json()

    return (
        <div>
            <Navbar name="Flood Relief Network"/>
            <Image src={background} alt="background" loading={"lazy"} className="w-full max-h-[80vh] object-cover object-center" />
            
            <Events items={data.items}/>

            <Team />
        </div>
    )
}