export function formatEventDate(datetime: string) {
  const date = new Date(datetime);

  const datePart = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long"
  }).format(date);

  const timePart = new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);

  return `${datePart}, ${timePart}`;
}