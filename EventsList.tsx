'use client'

import { useEffect, useState } from 'react'
import EventCard, { Event } from './app/Eventcard'

export default function EventsList() {
    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/api/events')
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.error('Ошибка fetch:', err))
    }, [])

    if (!events.length)
        return <p className="text-center py-6 text-gray-500">Мероприятия пока не добавлены</p>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    )
}
