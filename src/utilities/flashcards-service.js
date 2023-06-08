import * as flashcardsAPI from "./flashcards-api";

export async function createDeck(data) {
  const deck = await flashcardsAPI.createDeck(data);
  return deck;
}
