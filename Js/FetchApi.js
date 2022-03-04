export const Get_Pokemones = async (idpokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${idpokemon}`;
    let response = await fetch(url);
    let result = await response.json();
    return result
  } catch (error) {
    console.log(error)
  }
}

export default Get_Pokemones;