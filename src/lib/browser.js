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

export default {};
