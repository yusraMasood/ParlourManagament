// import { URL, URLSearchParams } from 'react-native-url-polyfill';
export const extractDataFromJoinLink = (link) => {
  const url = new URL(link);

  // const password = url.searchParams.get('pwd');
  // const meetingNumber = url.pathname.replace('/j/', '') || null;
  const password = "ajdxQU1BaGxRYWRKTGNWUnQzbG9WZz09";
  const meetingNumber = "99267527165";

  return {
    password,
    meetingNumber,
  };
};