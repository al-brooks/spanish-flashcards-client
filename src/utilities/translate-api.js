import sendRequest from "./send-request";
const BASE_URL = "http://localhost:3001/api/translate/";

export function getTranslation(search) {
  return sendRequest(`${BASE_URL}${search}`);
}
