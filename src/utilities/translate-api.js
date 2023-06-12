import sendRequest from "./send-request";
const BASE_URL = "https://spanish-flashcards.herokuapp.com/api/translate/";

export function getTranslation(search) {
  return sendRequest(`${BASE_URL}${search}`);
}
