export const cookieParser = (cookieName: string, cookies: string) => {
  const cookie = cookies
    .split(";")
    .find((c) => c.trim().startsWith(`${cookieName}=`))
    ?.split("=")[1];

  console.log(cookie);
  return cookie as string;
};
