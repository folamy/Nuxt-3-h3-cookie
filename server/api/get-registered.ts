import type { IncomingMessage, ServerResponse } from 'http';
import { useCookie } from 'h3';
export default async (req: IncomingMessage, res: ServerResponse) => {
  const hasCookie = useCookie(req, 'registered');
  const myCookie = hasCookie !== undefined ? JSON.parse(hasCookie) : {};
  // const registered = JSON.parse(useCookie(req, 'registered'));

  return myCookie;
};
