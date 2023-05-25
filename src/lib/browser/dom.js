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

/** @param {HTMLElement} el */
export function openFullscreen(el) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    /* Safari */
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    /* IE11 */
    el.msRequestFullscreen();
  }
}

/** @param {HTMLElement} el */
export function closeFullscreen(el) {
  if (el.exitFullscreen) {
    el.exitFullscreen();
  } else if (el.webkitExitFullscreen) {
    /* Safari */
    el.webkitExitFullscreen();
  } else if (el.msExitFullscreen) {
    /* IE11 */
    el.msExitFullscreen();
  }
}

export function enableScale() {
  const el = document.head.querySelector('meta[name="viewport"]');
  if (!el) return;
  let viewportAttr = el.attributes?.content?.value;
  if (!viewportAttr) return;
  if (!viewportAttr.includes('user-scalable')) {
    viewportAttr = `${viewportAttr},user-scalable=yes`;
  } else {
    viewportAttr = viewportAttr
      .split(',')
      .map((i) =>
        i.includes('user-scalable') ? 'user-scalable=yes' : i.trim(),
      )
      .join(',');
  }
  el.setAttribute('content', viewportAttr);
}

export function disableScale() {
  const el = document.head.querySelector('meta[name="viewport"]');
  if (!el) return;
  let viewportAttr = el.attributes?.content?.value;
  if (!viewportAttr) return;
  if (!viewportAttr.includes('user-scalable')) {
    viewportAttr = `${viewportAttr},user-scalable=no`;
  } else {
    viewportAttr = viewportAttr
      .split(',')
      .map((i) => (i.includes('user-scalable') ? 'user-scalable=no' : i.trim()))
      .join(',');
  }
  el.setAttribute('content', viewportAttr);
}

export default {};
