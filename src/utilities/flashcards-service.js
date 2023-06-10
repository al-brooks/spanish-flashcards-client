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
