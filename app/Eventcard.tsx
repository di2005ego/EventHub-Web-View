'use client'

import Link from 'next/link'

export type Event = {
    id: number
    title: string
    description: string
    datetime: string
    location: string
    address?: string
    ageLimit?: number
    poster_url?: string
}

interface EventCardProps {
    event: Event
}

export default function EventCard({event}: EventCardProps) {
    const placeholderImage = '/placeholder.jpg'

    return (
        <Link
            href={`/events/${event.id}`}
            className="card"
        >
            {/* Изображение */}
            <div className="card-image">
                <img
                    src={event.poster_url || "https://via.placeholder.com/400x400"}
                    alt={event.title}
                />
            </div>

            {/* Контент карточки */}
            <div className="card-body flex flex-col gap-2">
                <strong className="text-lg">{event.title}</strong>

                {event.description && <div className="text-sm text-gray-600">{event.description}</div>}

                {/* Дата и время */}
                <div className="text-sm text-gray-700">
                    {event.datetime
                        ? new Date(event.datetime).toLocaleDateString() + " | " +
                        new Date(event.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        : "Дата не указана"} | {event.ageLimit ?? "0"}+
                </div>

                {/* Локация */}
                <div className="text-sm text-gray-600">{event.location}</div>
            </div>
        </Link>

    )

}
