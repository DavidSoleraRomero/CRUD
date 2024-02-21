/* JavaScript de validaciones para modificacion.html / insert.html */

function muestraError(id) {
    document.getElementById(id).classList.add("form-novalidado");
    document.getElementById(id + "Help").style.visibility="visible";
}

function borraErrores(id) {
    document.getElementById(id).classList.remove("form-novalidado");
    document.getElementById(id + "Help").style.visibility="hidden";
}

function validaNombre() {
    let nombre = document.getElementById("username");
    if (nombre.value == "" | nombre.value == null 
    | nombre.value.replace(/\s/g, "") == "" | ! /[a-zA-Z0-9]{5,}/.test(nombre.value)) {
        muestraError("username");
        return false;
    }
    borraErrores("username");
    return true;
}

function validaPasswords() {
    let password = document.getElementById("password");
    let passwordtwo = document.getElementById("passwordtwo");
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (password.value == "" | password.value == null 
    | password.value.replace(/\s/g, "") == "" | ! patron.test(password.value)
    | passwordtwo.value != password.value) {
        muestraError("password");
        passwordtwo.classList.add("form-novalidado");
        return false;
    }
    borraErrores("password");
    passwordtwo.classList.remove("form-novalidado");
    return true;
}

function validaCentro() {
    let centro = document.getElementById("centros");
    if (centro.value == 0) {
        muestraError("centro");
        return false;
    }
    borraErrores("centro");
    return true;
}

function validaDNI() {
    let dni = document.getElementById("dni");
    if (dni.value == "" | dni.value == null) {
        muestraError("dni");
        return false;
    }
    borraErrores("dni");
    return true;
}

function validaEmail() {
    let email = document.getElementById("email");
        muestraError("email");
        return false;
    borraErrores("email");
    return true;
}

function validacion() {
    if (validaNombre() & validaPasswords() & validaCentro() & validaDNI() & validaEmail()) {
        return true;
    } else {
        return false;
    }
}

