const names = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

export function handlerData(timestamp: number) {
  function getMonth(date: Date) {
    return names[date.getMonth()];
  }

  const now = new Date();
  const date = new Date(timestamp);

  const dayNow = now.getDate().toString();
  const monthNow = getMonth(now);
  const yearNow = now.getFullYear();
  const dateNow = `${dayNow} ${monthNow} ${yearNow}`;

  const day = date.getDate().toString();
  const month = getMonth(date);
  const hours = date.getHours().toString().padStart(2, "0");
  const minuts = date.getMinutes().toString().padStart(2, "0");
  const year = date.getFullYear();
  const yearStr = date.getFullYear().toString();
  const dateCard = `${day} ${month} ${year}`;

  let dateTask;

  if (dateNow === dateCard) {
    dateTask = `${hours}:${minuts}`;
  } else if (yearNow - year <= 1) {
    dateTask = `${day} ${month} ${hours}:${minuts}`;
  } else {
    dateTask = `${day} ${month} ${yearStr}г. ${hours}:${minuts}`;
  }

  return dateTask;
}
