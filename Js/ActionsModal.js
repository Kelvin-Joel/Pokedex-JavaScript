import { form_login, form_register_user, container_forms, PokemonList_container, btn_tags_login, btn_tags_register} from './Variables.js';


export const Open_list_Favorite = (e, Add_Pokemon_Favorite) => {
    if (e.target.classList.contains('open_list_favorite')) {
        list_pokemones_favorites.classList.remove('hidden')
        PokemonList_container.classList.add('hidden')
        Add_Pokemon_Favorite();
    }
}

export const Close_list_Favorite = (e) => {
    if (e.target.classList.contains('btn_close_favorite')) {
        list_pokemones_favorites.classList.add('hidden')
        PokemonList_container.classList.remove('hidden')
    }
}

export const close_session = (e) => {
    if (e.target.classList.contains('btn_logaut')) {
        PokemonList_container.classList.add('hidden')
        form_login.reset();
        container_forms.classList.remove('hidden')
    }
}

export const OpenFormRegister = (e) => {
    if (e.target.classList.contains('btn_tags_register')) {
        btn_tags_login.classList.remove('background-color')
        btn_tags_register.classList.add('background-color')
        form_register_user.classList.remove('hidden')
        form_login.classList.add('hidden')
        title.textContent = "Register User"
        return
    }
}

export const CloseFormRegister = (e) => {
    if (e.target.classList.contains('btn_tags_login')) {
        btn_tags_login.classList.add('background-color')
        btn_tags_register.classList.remove('background-color')
        form_login.classList.remove('hidden')
        form_register_user.classList.add('hidden')
        PokemonList_container.classList.add('hidden')
        title.textContent = "Login"
        return
    }
}