"use client"

import { Calendar } from "./calendar"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import { Card, CardDescription, CardHeader } from "./card"

dayjs.extend(utc)
dayjs.extend(timezone)

export interface props {
    items: Array<{ start: { date: string }, summary: string, description?: string }>
}

export default function Events(props: props) {
    const modifiers = props.items.map((e: { start: { date: string }, summary: string, description?: string }) => {
        return e.start && e.start.date ? dayjs(e.start.date).tz("America/New_York").toDate() : null
    }).filter((e: Date | null) => e != null)

    const events: { [day: string]: { name: string, desc: string } } = {}
    props.items.forEach((e: { start: { date: string }, summary: string, description?: string }) => {
        events[e.start.date] = { name: e.summary, desc: e.description ? e.description : "" }
    })

    const [date, setDate] = useState<Date | undefined>(new Date())
    const [currentEvent, setEvent] = useState({ name: `No events for ${dayjs(date).format("MMMM D, YYYY")}`, desc: "" })

    useEffect(() => {
        updateEvent()
    }, [date])

    function updateEvent() {
        const formatted = dayjs(date).format("YYYY-MM-DD")
        if (formatted in events) {
            setEvent(events[formatted])
        } else {
            setEvent({ name: `No events for ${dayjs(date).format("MMMM D, YYYY")}`, desc: "" })
        }
    }

    return (
        <>
            <h1 className="text-center mt-5 text-2xl ">Schedule</h1>
            <div className="flex flex-col items-center justify-center gap-x-10 my-5">
                <Calendar mode="single" selected={date} onSelect={setDate} modifiers={{ events: modifiers }} className="w-[300px] flex justify-center border border-[#b6b6b6] rounded-2xl" />
                <Card className="w-[300px] px-4 border border-[#b6b6b6] mt-5">
                    <CardHeader>
                        <h1 className="text-center text-balance">{currentEvent.name}</h1>
                        {currentEvent.desc == "" ? <></> : <CardDescription className="text-center text-balance">{currentEvent.desc}</CardDescription>}
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}