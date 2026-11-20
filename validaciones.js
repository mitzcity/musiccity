
// Obtener los elementos del formulario
const nombre = document.getElementById("nombre");
const paterno = document.getElementById("paterno");
const materno = document.getElementById("materno");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const gmail = document.getElementById("gmail");

const resultado = document.getElementById("resultado");

// Expresiones regulares
const soloLetras = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{1,100}$/;
const soloNumeros = /^[0-9]{1,3}$/;
const soloTelefono = /^[0-9]{0,16}$/;
const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


// Función para mostrar mensajes
function mostrarMensaje(campo, idMensaje, valido, mensaje) {

    const elementoMensaje = document.getElementById(idMensaje);

    if (valido) {
        campo.classList.remove("invalido");
        campo.classList.add("valido");

        elementoMensaje.textContent = "Correcto";
        elementoMensaje.className = "mensaje exito";

    } else {
        campo.classList.remove("valido");
        campo.classList.add("invalido");

        elementoMensaje.textContent = mensaje;
        elementoMensaje.className = "mensaje error";
    }

    return valido;
}


// VALIDAR NOMBRE
function validarNombre() {
    const valor = nombre.value.trim();

    return mostrarMensaje(
        nombre,
        "errorNombre",
        soloLetras.test(valor),
        "Solo se permiten letras y espacios (1 a 100 caracteres)."
    );
}


// VALIDAR APELLIDO PATERNO
function validarPaterno() {
    const valor = paterno.value.trim();

    return mostrarMensaje(
        paterno,
        "errorPaterno",
        soloLetras.test(valor),
        "Solo se permiten letras y espacios (1 a 100 caracteres)."
    );
}


// VALIDAR APELLIDO MATERNO
function validarMaterno() {
    const valor = materno.value.trim();

    return mostrarMensaje(
        materno,
        "errorMaterno",
        soloLetras.test(valor),
        "Solo se permiten letras y espacios (1 a 100 caracteres)."
    );
}


// VALIDAR EDAD
function validarEdad() {
    const valor = edad.value;

    return mostrarMensaje(
        edad,
        "errorEdad",
        soloNumeros.test(valor),
        "Ingresa solamente de 1 a 3 números."
    );
}


// VALIDAR TELEFONO
function validarTelefono() {
    const valor = telefono.value;

    return mostrarMensaje(
        telefono,
        "errorTelefono",
        soloTelefono.test(valor),
        "El teléfono debe contener exactamente 16 números."
    );
}


// VALIDAR CORREO
function validarGmail() {
    const valor = gmail.value.trim();

    return mostrarMensaje(
        gmail,
        "errorGmail",
        formatoCorreo.test(valor),
        "Ingresa un correo electrónico válido."
    );
}


// CONVERTIR NOMBRES A MAYÚSCULAS
// Y ELIMINAR CARACTERES NO PERMITIDOS
function filtrarLetras(campo) {

    campo.addEventListener("input", function() {

        this.value = this.value
            .replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]/g, "")
            .toUpperCase()
            .slice(0, 100);

    });
}


// ELIMINAR TODO LO QUE NO SEAN NÚMEROS
function filtrarNumeros(campo, maximo) {

    campo.addEventListener("input", function() {

        this.value = this.value
            .replace(/[^0-9]/g, "")
            .slice(0, maximo);

    });
}


// APLICAR FILTROS A LOS CAMPOS
filtrarLetras(nombre);
filtrarLetras(paterno);
filtrarLetras(materno);

filtrarNumeros(edad, 3);
filtrarNumeros(telefono, 16);


// VALIDACIÓN EN TIEMPO REAL
nombre.addEventListener("input", validarNombre);
paterno.addEventListener("input", validarPaterno);
materno.addEventListener("input", validarMaterno);
edad.addEventListener("input", validarEdad);
telefono.addEventListener("input", validarTelefono);
gmail.addEventListener("input", validarGmail);


// VALIDAR TODOS LOS CAMPOS AL PRESIONAR EL BOTÓN
document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    const v1 = validarNombre();
    const v2 = validarPaterno();
    const v3 = validarMaterno();
    const v4 = validarEdad();
    const v5 = validarTelefono();
    const v6 = validarGmail();

    if (v1 && v2 && v3 && v4 && v5 && v6) {

        resultado.textContent =
            "¡Formulario validado correctamente!";

        resultado.className = "exito";

        alert("¡Todos los datos son correctos!");

    } else {

        resultado.textContent =
            "Error: Revisa los campos del formulario.";

        resultado.className = "error";

        alert("Hay campos incorrectos. Por favor, revisa el formulario.");
    }

});
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Esto detiene el cambio de página

    const v1 = validarEdad();
    const v2 = validarTelefono();
    const v3 = validarGmail();
    const v4 = validarFecha();
    const v5 = validarContrasena();
    const v6 = validarConfirmar();

    const resultado = document.getElementById("resultado");

    if (v1 && v2 && v3 && v4 && v5 && v6) {
        resultado.textContent = "¡Suscripción Exitosa!";
        resultado.style.color = "green";

        // Solo aquí sí te vas a formulario.html
        setTimeout(function() {
            window.location.href = "formulario.html";
        }, 1000);

    } else {
        resultado.textContent = "Revisa los campos en rojo, hay errores.";
        resultado.style.color = "red";
    }
});
