import * as translateAPI from "./translate-api";

export async function getTranslation(search) {
  const translation = await translateAPI.getTranslation(search);
  return translation;
}
