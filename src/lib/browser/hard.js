export function hapticFeedback(intensity = 4) {
  if (!window?.navigator?.vibrate) return undefined;
  return window.navigator.vibrate(intensity);
}

export default {};
