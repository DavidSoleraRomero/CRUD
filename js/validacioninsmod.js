/* JavaScript de validaciones para modificacion.html / insert.html */

function validaNombre() {
    let nombre = document.getElementById("username");
    let userHelp = document.getElementById("usernameHelp");
    if (nombre.value == "" | nombre.value == null 
    | nombre.value.replace(/\s/g, "") == "" | ! /[a-zA-Z0-9]{2,}/.test(nombre.value)) {
        userHelp.style.visibility="visible";
        nombre.classList.add("form-novalidado");
        return false;
    }
    nombre.classList.remove("form-novalidado");
    userHelp.style.visibility="hidden";
    return true;
}

function validaPasswords() {
    let password = document.getElementById("password");
    let passwordtwo = document.getElementById("passwordtwo");
    let passwordHelp = document.getElementById("passwordHelp");
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (password.value == "" | password.value == null 
    | password.value.replace(/\s/g, "") == "" | ! patron.test(password.value)
    | passwordtwo.value != password.value) {
        passwordHelp.style.visibility="visible";
        password.classList.add("form-novalidado");
        passwordtwo.classList.add("form-novalidado");
        return false;
    }
    password.classList.remove("form-novalidado");
    passwordtwo.classList.remove("form-novalidado");
    passwordHelp.style.visibility="hidden";
    return true;
}

function validaCentro() {
    let centro = document.getElementById("centros");
    let centroHelp = document.getElementById("centroHelp");
    if (centro.value == 0) {
        centroHelp.style.visibility="visible";
        document.getElementById("centro").classList.add("form-novalidado");
        return false;
    }
    document.getElementById("centro").classList.remove("form-novalidado");
    centroHelp.style.visibility="hidden";
    return true;
}

function validaFecha() {
    let date = document.getElementById("date");
    let dateHelp = document.getElementById("dateHelp");
    if (date.value == "" | date.value == null) {
        date.classList.add("form-novalidado");
        dateHelp.style.visibility="visible";
        return false;
    }
    date.classList.remove("form-novalidado");
    dateHelp.style.visibility="hidden";
    return true;
}

function validacion() {
    if (validaNombre() & validaPasswords() & validaCentro() & validaFecha()) {
        return true;
    } else {
        return false;
    }
}

function borraErrores(id) {
    document.getElementById(id).classList.remove("form-novalidado");
    document.getElementById(id + "Help").style.visibility="hidden"
}