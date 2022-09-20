export function setCookie(value: string) {
  const expires = new Date(
    new Date().setFullYear(new Date().getFullYear() + 5)
  ).toUTCString();
  document.cookie = `sessionToken=${value}; expires=${expires}; path=/`;
}

export function eraseCookie() {
  document.cookie =
    'sessionToken' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function getCookie() {
  const nameEQ = 'sessionToken' + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}
