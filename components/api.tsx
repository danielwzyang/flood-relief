import axios from "axios"

export async function getEvents() {
    try {
        const response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR}/events?key=${process.env.API_KEY}`, {
            headers: {
                "Cache-Control": "no-cache"
            }
        })
        return response.data.items
    } catch (error) {
        console.error("error fetching events", error)
    }
}