import type { IncomingMessage, ServerResponse } from 'http';
import { setCookie } from 'h3';
export default async (req: IncomingMessage, res: ServerResponse) => {
  const registered = { name: 'foo', id: 'bar' };
  console.log(registered);
  setCookie(res, 'registered', JSON.stringify(registered));
  return registered;
};
