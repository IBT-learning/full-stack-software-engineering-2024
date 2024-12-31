
const BASE_URL = "https://quoteslate.vercel.app/api";

export async function fetchTags() {
  const response = await fetch(`${BASE_URL}/tags`);
  if (!response.ok) throw new Error("Failed to fetch tags");
  return response.json();
}

export async function fetchQuoteByTag(tag) {
  const response = await fetch(`${BASE_URL}/quotes/random?tag`);
  if (!response.ok) throw new Error("Failed to fetch quote");
  return response.json();
}
