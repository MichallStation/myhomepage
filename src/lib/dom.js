/** @param {Event} event @returns {Event} */
export function eventCancelBubble(event) {
  event.stopPropagation();
  return event;
}

/** @param {Event} event @returns {Event} */
export function eventPreventDefault(event) {
  event.preventDefault();
  return event;
}

export default {};
