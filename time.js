export function time_now() {
  const now = new Date();

  // Format the date: "Today is March 20, 2026, Friday."
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  const formattedDate = dateFormatter.format(now);

  // Format the time: "The current time is 11:45 AM."
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const formattedTime = timeFormatter.format(now);

  return `Today is ${formattedDate}.<br>The current time is ${formattedTime}.`;
}
