/* JavaScript de validaciones para modificacion.html / insert.html */

function anadirClaseError(id, clase) {
    document.getElementById(id).classList.add(clase);
    document.getElementById(id + "Help").style.visibility="visible";
}

function eliminarClaseError(id, clase) {
    document.getElementById(id).classList.remove(clase);
    document.getElementById(id + "Help").style.visibility="hidden";
}

function muestraError(id) {
    document.getElementById(id + "Help").style.visibility="visible";
}

function ocultaError(id) {
    document.getElementById(id + "Help").style.visibility="hidden";
}

function validaUsername() {
    let nombre = document.getElementById("username");
    if (! /[a-zA-Z0-9]{5,}/.test(nombre.value)) {
        anadirClaseError("username", "form-novalidado");
        return false;
    }
    eliminarClaseError("username", "form-novalidado");
    return true;
}

function validaCentro() {
    let centro = document.getElementById("centros");
    if (centro.value == 0) {
        anadirClaseError("centro", "form-novalidado");
        return false;
    }
    eliminarClaseError("centro", "form-novalidado");
    return true;
}

function validaDNI() {
    let dni = document.getElementById("dni");
    if (!/^[0-9]{7,8}[A-Za-z]$/.test(dni.value)) {
        anadirClaseError("dni", "form-novalidado");
        return false;
    }
    eliminarClaseError("dni", "form-novalidado");
    return true;
}

function validaEmail() {
    let email = document.getElementById("email");
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
    if (!regex.test(email.value)) {
        anadirClaseError("email", "form-novalidado");
        return false;
    }
    eliminarClaseError("email", "form-novalidado");
    return true;
}

function validaEficiencia() {
    let eficiencia = document.getElementById("eficiencia");
    if (eficiencia.value.trim == "" || eficiencia.value < 1 || eficiencia.value > 10) {
        anadirClaseError("eficiencia", "form-novalidado");
        return false;
    }
    eliminarClaseError("eficiencia", "form-novalidado");
    return true;
}

function validaCheck() {
    let check = document.getElementById("notificaciones");
    if (!check.checked) {
        anadirClaseError("notificaciones", "errorCheckbox");
        return false;
    }
    eliminarClaseError("notificaciones", "errorCheckbox");
    return true;
}

function validaRadio() {
    let genders = document.getElementsByName("gender");
    let seleccionado = false;
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            seleccionado = true;
            break;
        }
    }
    if (seleccionado == false) {
        muestraError('gender');
        return false;
    }
    ocultaError('gender');
    return true;
}

function validaNombreReal() {
    let nombreReal = document.getElementById("nombre");
    if (nombreReal.value.trim() == "") {
        anadirClaseError("nombre", "form-novalidado");
        return false;
    }
    eliminarClaseError("nombre", "form-novalidado");
    return true;
}

function validacion() {
    if (validaUsername() & validaCentro() & validaDNI() & validaEmail() & validaEficiencia()
    & validaCheck() & validaRadio() & validaNombreReal()) {
        return true;
    } else {
        return false;
    }
}

