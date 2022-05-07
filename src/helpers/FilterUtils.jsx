export function filterEventsByCurrent(events) {
  const now = Date.now();
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);

  const currentEvents = events?.filter((event) => {
    return new Date(event.datetime) >= today;
  });

  return currentEvents;
}
