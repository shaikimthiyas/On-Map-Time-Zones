/**
 * Horologium DOM Utilities
 */

/**
 * Safely position a floating tooltip within viewport boundaries
 */
export function positionWithinViewport(element, x, y, offsetX = 16, offsetY = -45) {
  if (!element) return;
  const width = element.offsetWidth || 180;
  const height = element.offsetHeight || 40;

  let posX = x + offsetX;
  let posY = y + offsetY;

  if (posX + width > window.innerWidth - 12) {
    posX = x - width - 12;
  }
  if (posY < 10) {
    posY = y + 25;
  }

  element.style.left = `${Math.max(10, posX)}px`;
  element.style.top = `${Math.max(10, posY)}px`;
}

/**
 * Animate a value change or element class
 */
export function flashElement(element, activeClass = 'active', durationMs = 200) {
  if (!element) return;
  element.classList.add(activeClass);
  setTimeout(() => element.classList.remove(activeClass), durationMs);
}
