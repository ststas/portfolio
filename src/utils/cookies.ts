const LOCALE_COOKIE_NAME = "portfolio-locale";

export const setLocaleCookie = (locale: string): void => {
  if (typeof document !== "undefined") {
    // Set cookie for 1 year
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  }
};

export const getLocaleCookie = (): string | null => {
  if (typeof document === "undefined") {
    return null;
  }

  const cookies = document.cookie.split(";");
  const localeCookie = cookies.find((cookie) => cookie.trim().startsWith(`${LOCALE_COOKIE_NAME}=`));

  if (localeCookie) {
    return localeCookie.split("=")[1];
  }

  return null;
};
