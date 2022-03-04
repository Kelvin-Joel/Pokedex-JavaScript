import { txt_new_user, txt_newUser_paswoord, ArrayPokemones,form_login, form_register_user,title } from './Variables.js'
import { SavePkemon } from './App.js'
export const Register_New_User = (e) => {

    const DatosNewUser = {
        id: Date.now(),
        user: txt_new_user.value,
        paswoord: txt_newUser_paswoord.value,
        favorites: [],
    }

    if (e.target.classList.contains('btn_register_user')) {
        e.preventDefault();
        ArrayPokemones.push(DatosNewUser)
        txt_new_user.value = '';
        txt_newUser_paswoord.value = '';
        SavePkemon();
    }
}

export default Register_New_User