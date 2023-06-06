import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (token) {
    options.headers ||= {};

    options.header.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);

  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
