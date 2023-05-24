export function expireDays(days = 365) {
  return new Date(Date.now() + days * 60 * 60 * 24 * 1000);
}

export function expireWeeks(weeks = 52) {
  return new Date(Date.now() + weeks * 7 * 60 * 60 * 24 * 1000);
}

export function expireMinutes(minutes = 60) {
  return new Date(Date.now() + minutes * 60 * 1000);
}

export function expireSeconds(seconds = 60) {
  return new Date(Date.now() + seconds * 1000);
}

export default {};
