export function expiresDay(days = 365) {
  return new Date(Date.now() + days * 60 * 60 * 24 * 1000);
}

export default {};
