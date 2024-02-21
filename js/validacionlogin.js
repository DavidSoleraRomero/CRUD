/* JavaScript de validaciones para login.html */

function validaNombre() {
    let nombre = document.getElementById("username");
    let userHelp = document.getElementById("usernameHelp");
    if (nombre.value == "" | nombre.value == null 
    | nombre.value.replace(/\s/g, "") == "" | ! /[a-zA-Z0-9]{5,}/.test(nombre.value)) {
        userHelp.style.visibility="visible";
        nombre.classList.add("form-novalidado");
        return false;
    }
    nombre.classList.remove("form-novalidado");
    userHelp.style.visibility="hidden";
    return true;
}

function validaPassword() {
    let password = document.getElementById("password");
    let passwordHelp = document.getElementById("passwordHelp");
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (password.value == "" | password.value == null | password.value.replace(/\s/g, "") == "" | ! patron.test(password.value)) {
        passwordHelp.style.visibility="visible";
        password.classList.add("form-novalidado");
        return false;
    }
    password.classList.remove("form-novalidado");
    passwordHelp.style.visibility="hidden";
    return true;
}

function validacion() {
    if (validaNombre() & validaPassword()) {
        return true;
    } else {
        return false;
    }
}

function borraErrores(id) {
    document.getElementById(id).classList.remove("form-novalidado");
    document.getElementById(id + "Help").style.visibility="hidden"
}