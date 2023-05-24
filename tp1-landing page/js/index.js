// Chequeo del jQuery
// Esta línea garantiza que todo lo que se ejecute dentro de ready
// se ejecute solo cuando el HTML esté 100% cargado
$(document).ready(() => {
    console.log("en vivo neneeee");
    // Cuando hacemos click en "suscribirme" de los form abreviados, abrimos el popup del form completo
    $(".btn").click(() => {
        abrirPopupForm();
        trasladarMailDeMiniformAFormCompleto();
    });

    // Cuando hacemos click en la cruz de los popup, los cerramos
    $(".cerrar").click(() => {
        cerrarPopup();
    });

    // Cuando enviamos el formulario completo, mostramos el feedback
    $("#formulario-principal").on("submit", (e) => {
        e.preventDefault(); // Esta linea es importante para evitar que la página se recargue al enviar le formulario
        abrirFeedback();
        trasladarDatosDelFormCompletoAFeedback();
    });
});

function abrirPopupForm() {
    console.log("Popup abierto");
    $(".contenedor_pop.form").removeClass("oculto");
}

function cerrarPopup() {
    $(".contenedor_pop.form").addClass("oculto");
    $(".contenedor_pop.fedd").addClass("oculto");
}

function abrirFeedback() {
    $(".contenedor_pop.form").addClass("oculto");
    $(".contenedor_pop.fedd").removeClass("oculto");
}

function trasladarDatosDelFormCompletoAFeedback() {
    const inputNombre = $("#nombre");
    const inputApellido = $("#apellido");
    const inputEmail = $("#email");

    const nombre = inputNombre.val();
    const apellido = inputApellido.val();
    const email = inputEmail.val();

    const spanNombre = $("#dato-nombre");
    const spanEmail = $("#dato-email");

    spanNombre.html(nombre + " " + apellido);
    spanEmail.html(email);
}

function trasladarMailDeMiniformAFormCompleto() {
    const inputEmail1 = $("#miniform-email-1");
    const inputEmail2 = $("#miniform-email-2");
    const inputEmail3 = $("#miniform-email-3");

    const email1 = inputEmail1.val();
    const email2 = inputEmail2.val();
    const email3 = inputEmail3.val();

    const inputEmailFormCompleto = $("#email");

    console.log(email1, email2, email3);
    if (email1 != "") {
        inputEmailFormCompleto.val(email1);
    } else if (email2 != "") {
        inputEmailFormCompleto.val(email2);
    } else if (email3 != "") {
        inputEmailFormCompleto.val(email3);
    }
}




