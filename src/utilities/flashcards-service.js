import * as flashcardsAPI from "./flashcards-api";

export async function createDeck(name) {
  const deck = await flashcardsAPI.createDeck(name);
  return deck;
}
