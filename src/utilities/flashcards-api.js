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

export function updateDeck(id, data) {
  return sendRequest(`${DECKS_URL}/${id}`, "PUT", data);
}

export function deleteDeck(id) {
  return sendRequest(`${DECKS_URL}/${id}`, "DELETE");
}

export async function createCard(deckId, data) {
  return sendRequest(`${DECKS_URL}/${deckId}/cards/create`, "POST", data);
}

export async function updateCard(deckId, cardId, data) {
  return sendRequest(`${DECKS_URL}/${deckId}/cards/${cardId}`, "PUT", data);
}

export function deleteCard(deckId, cardId) {
  return sendRequest(`${DECKS_URL}/${deckId}/cards/${cardId}`, "DELETE");
}
