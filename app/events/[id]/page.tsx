import { formatEventDate } from "../../../lib/formatDate";
import { getEvent } from "../../../lib/events";
import { formatEventDateWithWeekday } from "../../../lib/formatDateWithWeekday";

export default async function EventPage({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id);

  if (!event) return <div>Не найдено</div>;

  return (
    <div className="event-page">
      <h1>{event.title}</h1>
      <p className="event-datetime-age">
        {formatEventDateWithWeekday(event.datetime)} | {event.ageLimit}+
      </p>

    <div className="event-main-container">
  <div className="event-content">
    <img src={event.poster_url} alt={event.title} className="event-poster" />
    <div className="event-description">
      <p style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
        {event.description.replace(/  /g, "\n")}
      </p>
      <button className="buy-ticket-button">
        Купить билет от {event.minPrice} руб.
      </button>
    </div>
  </div>

  <div className="event-location">
    <p className="location-name">{event.location}</p>
    <p className="location-address">{event.address}</p>
  </div>

  <div className="map-widget">
  <iframe
    src={`https://yandex.ru/map-widget/v1/?rtext=${encodeURIComponent(
      "город Нижний Новгород, " + event.address
    )}`}
    width="100%"
    height="400"
    frameBorder="0"
  ></iframe>
</div>
</div>
</div>
  );
}
