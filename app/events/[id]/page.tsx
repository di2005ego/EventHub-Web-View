'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'

type Event = {
    id: number
    title: string
    description: string
    date: string
    location: string
    address: string
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
        <div className="max-w-4xl mx-auto p-6 flex flex-col gap-8">

            {/* Кнопка Назад */}
            <button
                className="buy-ticket-button"
                onClick={() => router.back()}
            >
                ← Назад
            </button>

            {/* Заголовок и дата */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">{event.title}</h1>
                <p className="text-gray-700 text-sm">
                    {new Date(event.date).toLocaleDateString()} |{" "}
                    {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} |{" "}
                    {event.ageLimit}+
                </p>
            </div>

            {/* Изображение */}
            <div className="overflow-hidden rounded-lg" style={{ width: 300, height: 200 }}>
                <img
                    src={event.poster_url || placeholder}
                    alt={event.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>


            {/* Описание */}
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Описание мероприятия</h2>
                <p className="text-gray-800 whitespace-pre-wrap">{event.description}</p>
            </div>

            {/* Место проведения */}
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Место проведения</h2>
                <p className="font-medium text-gray-800">{event.location}</p>
                <p className="text-gray-700">{event.address}</p>
            </div>

            <button
                className="buy-ticket-button"
                onClick={() => alert('Здесь будет покупка билета')}
            >
                Купить билет
            </button>
            {/* Карта */}
            <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe
                    src={`https://yandex.ru/map-widget/v1/?rtext=${encodeURIComponent('город Нижний Новгород, ' + event.address)}`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    )
}
