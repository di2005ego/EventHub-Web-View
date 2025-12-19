import { formatEventDate } from "../lib/formatDate";
import Link from "next/link";
import { getEvents } from "../lib/events";

export default async function Home() {
  const events = await getEvents();

  return (
    <div className="grid">
      {events.map((e: any) => (
        <Link key={e.id} href={`/events/${e.id}`} className="card">
          <div className="card-image">
            <img
            src={e.poster_url || "https://via.placeholder.com/400x400"}
            alt={e.title}
            />
          </div>
          <div className="card-body">
            <strong>{e.title}</strong>
            <div>{e.type}</div>
            <div>{formatEventDate(e.datetime)}</div>
            <div>{e.location}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
