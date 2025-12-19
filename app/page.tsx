// app/page.tsx или pages/index.tsx
import './globals.css'
import EventsList from '../EventsList'

export default function HomePage() {
  return (
      <main className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center py-6">Афиша мероприятий</h1>
        <EventsList />
      </main>
  )
}