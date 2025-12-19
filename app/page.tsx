// app/page.tsx или pages/index.tsx
import './globals.css'
import EventsList from '../EventsList'

export default function HomePage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventsList />
        </div>
    )
}
