import { Calendar } from "./calendar"
import { useEffect, useState } from "react"
import axios from "axios"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import { Card, CardDescription, CardHeader } from "./card"

dayjs.extend(utc)
dayjs.extend(timezone)

export default function Events() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [modifiers, setModifiers] = useState({ events: [] })
    const [eventList, setEventList] = useState<{ [day: string]: { name: string, desc: string } }>({})
    const [currentEvent, setEvent] = useState({ name: `No events for ${dayjs(date).format("MMMM D, YYYY")}`, desc: "" })

    const CALENDAR_ID = "c_348f6d7cb86ecdc10e0777411bf1b8b2aa1c334d76664140341af5b27ff723c5@group.calendar.google.com"

    async function fetchEvents() {
        try {
            const response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`, {
                params: {
                    key: process.env.NEXT_PUBLIC_API_KEY,
                }
            })

            console.log(response.data.items)

            const newEvents: { [day: string]: { name: string, desc: string } } = {}
            response.data.items.forEach((e: { start: { date: string }, summary: string, description?: string }) => { newEvents[e.start.date] = { name: e.summary, desc: e.description ? e.description : "" } })
            setEventList(newEvents)

            const events = response.data.items.map((e: { start: { date: string }, summary: string, description?: string }) => {
                return e.start && e.start.date ? dayjs(e.start.date).tz("America/New_York").toDate() : null
            }).filter((e: Date | null) => e != null)

            setModifiers({ events })
        } catch (error) {
            console.error("error fetching events", error)
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    useEffect(() => {
        const formatted = dayjs(date).format("YYYY-MM-DD")
        if (formatted in eventList) {
            setEvent(eventList[formatted])
        } else {
            setEvent({ name: `No events for ${dayjs(date).format("MMMM D, YYYY")}`, desc: "" })
        }
    }, [date])

    return (
        <>
            <h1 className="text-center mt-5 text-2xl ">Schedule</h1>
            <div className="flex flex-wrap items-center justify-center gap-x-10 my-5">
                <Calendar mode="single" selected={date} onSelect={setDate} modifiers={modifiers} className="border border-[#b6b6b6] rounded-2xl" />
                <Card className="w-[200px] border border-[#b6b6b6] mt-5">
                    <CardHeader>
                        <h1 className="text-center">{currentEvent.name}</h1>
                        {currentEvent.desc == "" ? <></> : <CardDescription className="text-center text-balance">{currentEvent.desc}</CardDescription>}
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}