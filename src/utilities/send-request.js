import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  try {
    const options = { method };

    if (payload) {
      options.headers = { "Content-Type": "Application/json" };
      options.body = JSON.stringify(payload);
    }

    const token = getToken();
    if (token) {
      options.headers ||= {};
      options.header.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(url, options);
    return res.json();
  } catch {
    throw new Error("Bad Request");
  }
}
