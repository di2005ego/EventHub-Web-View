export function formatEventDateWithWeekday(datetime: string) {
  const date = new Date(datetime);

  // День недели
  const weekday = new Intl.DateTimeFormat("ru-RU", { weekday: "long" }).format(date);

  // День и месяц
  const datePart = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long"
  }).format(date);

  // Время
  const timePart = new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);

  // Склеиваем
  return `${capitalizeFirstLetter(weekday)} ${datePart}, ${timePart}`;
}

// Функция для заглавной буквы
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}