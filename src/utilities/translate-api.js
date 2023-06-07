import sendRequest from "./send-request";
const BASE_URL = "/api/translate/";

export function getTranslation(search) {
  return sendRequest(`${BASE_URL}${search}`);
}
