import * as flashcardsAPI from "./flashcards-api";

export async function createDeck(data) {
  const deck = await flashcardsAPI.createDeck(data);
  return deck;
}

export async function getAllDecks() {
  const decks = await flashcardsAPI.getAllDecks();
  return decks;
}

export async function getDeck(id) {
  const deck = await flashcardsAPI.getDeck(id);
  return deck;
}

export async function updateDeck(id, data) {
  const deck = await flashcardsAPI.updateDeck(id, data);
  return deck;
}

export async function deleteDeck(id) {
  const response = await flashcardsAPI.deleteDeck(id);
  return response;
}

export async function createCard(deckId, data) {
  console.log(data);
  const card = await flashcardsAPI.createCard(deckId, data);
  return card;
}

export async function updateCard(deckId, cardId, data) {
  const card = await flashcardsAPI.updateCard(deckId, cardId, data);
  return card;
}

export async function deleteCard(deckId, cardId) {
  const response = await flashcardsAPI.deleteCard(deckId, cardId);
  return response;
}
