/* JavaScript de validaciones para modificacion.html / insert.html */

function muestraError(id) {
    document.getElementById(id).classList.add("form-novalidado");
    document.getElementById(id + "Help").style.visibility="visible";
}

function borraErrores(id) {
    document.getElementById(id).classList.remove("form-novalidado");
    document.getElementById(id + "Help").style.visibility="hidden";
}

function validaUsername() {
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
    if (!/^[A-Za-z]{6,7}\d$/.test(dni.value)) {
        muestraError("dni");
        return false;
    }
    borraErrores("dni");
    return true;
}

function validaEmail() {
    let email = document.getElementById("email");
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
    if (!regex.test(email.value)) {
        muestraError("email");
        return false;
    }
    borraErrores("email");
    return true;
}

function validaEficiencia() {
    let eficiencia = document.getElementById("eficiencia");
    if (eficiencia.value.trim == "" || eficiencia.value < 1 || eficiencia.value > 10) {
        muestraError("eficiencia");
        return false;
    }
    borraErrores("eficiencia");
    return true;
}

function validaCheck() {
    let check = document.getElementById("notificaciones");
    if (!check.checked) {
        muestraError("notificaciones");
        return false;
    }
    borraErrores("notificaciones");
    return true;
}

function validaRadio() {

}

function validaNombreReal() {
    let nombreReal = document.getElementById("nombre");
    if (nombreReal.value.trim() == "") {
        muestraError("nombre");
        return false;
    }
    borraErrores("nombre");
    return true;
}

function validacion() {
    if (validaUsername() & validaPasswords() & validaCentro() & validaDNI() & validaEmail() & validaEficiencia()
    & validaCheck() & validaRadio() & validaNombreReal()) {
        return true;
    } else {
        return false;
    }
}

