import sendRequest from "./send-request";
const DECKS_URL = "/api/decks/";
const FOLDERS_URL = "/api/folders/";

export function createDeck(name) {
  return sendRequest(`${DECKS_URL}${name}`, "POST");
}
