import { form_login, PokemonList_window, ArrayPokemones, container_forms, PokemonList_container } from './Variables.js'
import Get_Pokemones from './FetchApi.js';
export let user_data;

export const Initia_Session = (e) => {

    if (e.target.classList.contains('btn_login')) {

        user_data = ArrayPokemones.find(item => item.user === txt_name_user.value && item.paswoord === txt_paswoord.value)

        if (user_data) {
            form_login.classList.add('d-none')
            PokemonList_container.classList.remove('hidden')
            container_forms.classList.add('hidden')
            name_user.textContent = `User : ${user_data.user}`
            const Favorites = user_data.favorites
            swal("welcome'", "", "success");
            for (let index = 1; index < 50; index++) {
                Get_Pokemones(index).then(async (result) => {
                    AddPokemones(result,Favorites)
                }
                )
            }
        } else {
            swal("username or password does not exist'", "", "error");
        }
    }
}

export const AddPokemones = (pokemon,Favorites) => {
    Favorites.filter((pokemonFavorite) => pokemonFavorite.id === pokemon.id).length <= 0 ?
        PokemonList_window.innerHTML += `
   <div class="card_pokemon">
   <img class="card_img_pokemon" src=${pokemon.sprites.other.dream_world.front_default} alt="pokemones">
   <p class="text-center">${pokemon.name}</p>
   <button class="btn_favorite btn_capture" data-id=${pokemon.id}><i class="bi bi-plus-circle"></i> Capture</button>
   </div>
   `
        : PokemonList_window.innerHTML += `
   <div class="card_pokemon">
   <img class="card_img_pokemon" src=${pokemon.sprites.other.dream_world.front_default} alt="pokemones">
   <p class="text-center">${pokemon.name}</p>
   <button class="btn_favorite btn_capture" data-id=${pokemon.id}><i class="bi bi-plus-circle"></i> Atrapado</button>
   </div>
   `

   console.log('repintando :S')
}

export default Initia_Session