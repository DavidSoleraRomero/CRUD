/* JavaScript de validaciones para login.html */

function validaNombre() {
    let userHelp = document.getElementById("userHelp");
    let nombre = document.getElementById("username").value;
    if (nombre == "" | nombre == null | nombre.replace(/\s/g, "") == "") {
        userHelp.style.visibility="visible";
        return false;
    }
    userHelp.style.visibility="hidden";
    return true;
}

function validaPassword() {
    let password = document.getElementById("password").value;
    let passwordHelp = document.getElementById("passwordHelp");
    if (password == "" | password == null | password.replace(/\s/g, "") == "") {
        passwordHelp.style.visibility="visible";
        return false;
    }
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