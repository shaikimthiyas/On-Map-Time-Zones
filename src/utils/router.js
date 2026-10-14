/**
 * Horologium Application Router & Navigation Helpers
 */

export function getQueryParam(paramName) {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName);
}

export function setQueryParamWithoutReload(key, value) {
  const url = new URL(window.location.href);
  if (value) {
    url.searchParams.set(key, value);
  } else {
    url.searchParams.delete(key);
  }
  window.history.replaceState({}, '', url.toString());
}

export function navigateTo(path) {
  window.location.href = path;
}
