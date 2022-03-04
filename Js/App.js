import { ArrayPokemones, list_favorite } from './Variables.js';
import { Open_list_Favorite, Close_list_Favorite, close_session, OpenFormRegister, CloseFormRegister } from './ActionsModal.js';
import Register_New_User from './RegisterNewUsers.js';
import { Initia_Session, user_data } from './Initia_Session.js'
import AddPokemones from './Initia_Session.js'

document.addEventListener('click', (e) => {
    e.preventDefault();
    OpenFormRegister(e)
    CloseFormRegister(e);
    Initia_Session(e);
    close_session(e);
    Add_Pokemon_Favorite(e)
    Open_list_Favorite(e, lista_pokemones_favorite)
    Close_list_Favorite(e);
    Register_New_User(e);
    Delete_Pokemon_Favorite(e)
})

export const SavePkemon = () => {
    localStorage.setItem('pokemon', JSON.stringify(ArrayPokemones))
}

const Add_Pokemon_Favorite = (e) => {
    if (e.target.classList.contains('btn_favorite')) {

        const DatosPokemon = {
            id: Number(e.target.dataset.id),
            name: e.target.parentElement.children[1].textContent,
            image: e.target.parentElement.children[0].src,
        }

        const userData = ArrayPokemones.find(user => user.id === user_data.id)
        const isFavorite = userData.favorites.find(pokemon => pokemon.id === DatosPokemon.id) !== undefined

        if (isFavorite) {
            swal("Is Already Captured'", "", "error");
            return
        }
        swal("Captured'", "", "success");
        userData.favorites = [...userData.favorites, DatosPokemon]
        SavePkemon();
        AddPokemones(e);
    }
}

function lista_pokemones_favorite() {
    list_favorite.innerHTML = ''

    user_data.favorites.map((index) => {
        list_favorite.innerHTML += `
        <div class="card_pokemon card_favorito">
        <img class="card_img_pokemon" src=${index.image} alt="pokemones">
        <p class="text-center">${index.name}</p>
        <button class="btn_delete delete_pokemon_favorite" data-id=${index.id}>Delete</button>
        </div>
        `
    })
}

const Delete_Pokemon_Favorite = (e) => {
    let id_pokemon = e.target.dataset.id
    if (e.target.classList.contains('delete_pokemon_favorite')) {
        const userData = ArrayPokemones.find(user => user.id === user_data.id)
        let newpokemones = userData.favorites.filter(pokemon => pokemon.id !== Number(id_pokemon))
        userData.favorites = newpokemones
        SavePkemon();
        lista_pokemones_favorite();
    }
}
