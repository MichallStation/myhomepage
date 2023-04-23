export function expiresDay(days = 365) {
  return new Date(Date.now() + days * 86400 * 1000);
}

export default {};
