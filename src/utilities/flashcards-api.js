import sendRequest from "./send-request";
const DECKS_URL = "/api/decks";

export function createDeck(data) {
  return sendRequest(DECKS_URL, "POST", data);
}

export function getAllDecks() {
  return sendRequest(DECKS_URL);
}

export function getDeck(id) {
  return sendRequest(`${DECKS_URL}/${id}`);
}
