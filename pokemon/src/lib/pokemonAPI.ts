// get pokemon list 150

export async function getPokemonList() {
  const response = await fetch(process.env.APP_API_POKEMON + "/pokemon?limit=151&offset=0");
  const data = await response.json();
  return data.results;
}

// getPokemon -> given a string "pikachu", get the information of pikachu
export async function getPokemon(name: string) {
  const response = await fetch(process.env.APP_API_POKEMON + "/pokemon/" + name);
  const data = await response.json();  
  return data;
}
