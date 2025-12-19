'use client'

import Link from 'next/link'

export type Event = {
    id: number
    title: string
    description: string
    date: string
    location: string
    address?: string
    ageLimit?: number
    image?: string
}

interface EventCardProps {
    event: Event
}

export default function EventCard({ event }: EventCardProps) {
    const placeholderImage = '/placeholder.jpg'

    return (
        <Link
            href={`/events/${event.id}`}
            className="card"
        >
            {/* Изображение */}
            <div className="card-image">
                <img src={event.image || placeholderImage} alt={event.title} />
            </div>


            {/* Контент карточки */}
            <div className="card-body">
                <strong>{event.title}</strong>
                <p>{event.description}</p>
                <span className="event-datetime-age">
                    {new Date(event.date).toLocaleDateString()}{" "}
                    {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} |{" "}
                    {event.ageLimit ?? '0'}+
                </span>
                <span className="event-location">{event.location}</span>
            </div>
        </Link>
    )
}
