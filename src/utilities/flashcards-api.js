import sendRequest from "./send-request";
const DECKS_URL = "/api/decks";
const FOLDERS_URL = "/api/folders";

export function createDeck(data) {
  return sendRequest(DECKS_URL, "POST", data);
}

export function getAllDecks() {
  return sendRequest(DECKS_URL);
}
