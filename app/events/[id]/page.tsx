'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import {formatEventDateWithWeekday} from "../../../lib/formatDateWithWeekday";

type Event = {
    id: number
    title: string
    description: string
    datetime: string
    location: string
    address: string
    minPrice: number
    ageLimit: number
    poster_url?: string
}

export default function EventPage() {
    const params = useParams()
    const { id } = params
    const [event, setEvent] = useState<Event | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (!id) return
        fetch(`http://localhost:3000/api/events/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
            .catch(err => console.error('Ошибка fetch:', err))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <p className="text-center py-6">Загрузка...</p>
    if (!event) return <p className="text-center py-6">Мероприятие не найдено</p>

    const placeholder = '/placeholder.jpg'

    return (
        <div className="event-page min-h-screen flex flex-col items-center px-6 py-10 gap-12">

            {/* Заголовок */}
            <div className="text-center max-w-3xl flex flex-col gap-3">
                <h1>{event.title}</h1>
                <p className="event-datetime-age">
                    {formatEventDateWithWeekday(event.datetime)} | {event.ageLimit}+
                </p>
            </div>

            {/* Основной контент: постер + описание */}
            <div className="event-main-container flex flex-col gap-8 w-full max-w-4xl">

                <div className="event-content flex flex-col md:flex-row items-center gap-6">
                    {/* Постер */}
                    <img
                        src={event.poster_url}
                        alt={event.title}
                        className="event-poster rounded-xl shadow-md"
                        style={{ width: 360, height: 240, objectFit: "cover" }}
                    />

                    {/* Описание + кнопка */}
                    <div className="event-description flex flex-col gap-4">
                        <p style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
                            {event.description.replace(/  /g, "\n")}
                        </p>
                        <button className="buy-ticket-button self-start">
                            Купить билет от {event.minPrice} руб.
                        </button>
                    </div>
                </div>

                {/* Место проведения */}
                <div className="event-location flex flex-col gap-2 text-left">
                    <p className="location-name">{event.location}</p>
                    <p className="location-address">{event.address}</p>
                </div>

                {/* Карта */}
                <div className="map-widget w-full h-96 rounded-xl overflow-hidden shadow-md">
                    <iframe
                        src={`https://yandex.ru/map-widget/v1/?rtext=${encodeURIComponent(
                            "город Нижний Новгород, " + event.address
                        )}`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                    />
                </div>

            </div>
        </div>
    );



}
