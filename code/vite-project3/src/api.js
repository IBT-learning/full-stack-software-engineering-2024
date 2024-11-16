const API_URL = 'http://localhost:5173/api/recipes';  // Use the correct URL here

export async function fetchRecipes() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function fetchRecipeById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function createRecipe(recipeData) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipeData),
  });
  return response.json();
}

export async function updateRecipe(id, recipeData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipeData),
  });
  return response.json();
}

export async function deleteRecipe(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return response.json();
}
