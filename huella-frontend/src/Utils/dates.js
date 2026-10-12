export const greeting = (h) =>
  h < 12 ? "Buenos días" : h < 19 ? "Buenas tardes" : "Buenas noches";

export const shiftName = (h) =>
  h < 14 ? "Turno mañana" : h < 22 ? "Turno tarde" : "Turno noche";

export function formatToday(date = new Date()) {
  const txt = new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}