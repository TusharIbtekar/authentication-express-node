export const cookieParser = (cookieName: string, cookies: string) => {
  const cookie = cookies
    .split(";")
    .find((c) => c.trim().startsWith(`${cookieName}=`))
    ?.split("=")[1];

  return cookie as string;
};
