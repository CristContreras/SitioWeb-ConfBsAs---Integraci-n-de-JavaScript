const valorTicket = 200;
const descuentoEstudiante = 80;
const descuentoTrainee = 50;
const descuentoJunior = 15;
let precioFinal;


var elementPrecio = document.getElementById("totalPagar");

var elementCategoria = document.getElementById("categoria");

var elementCantidad = document.getElementById("cantidad");

elementCantidad.addEventListener("input", function () {
    console.log(elementCantidad.value);
    var cantidadPersonas = elementCantidad.value;
    if (cantidadPersonas > 0) {
        //muestra numero actual en consola
        // console.log(cantidadPersonas);
        catSeleccionada = elementCategoria.value;
        if (catSeleccionada != "") {
            switch (catSeleccionada) {
                case "estudiante":
                    precioFinal = calcularPrecio(cantidadPersonas, descuentoEstudiante, catSeleccionada)
                    // alert("Precio final: " + precioFinal);
                    elementPrecio.innerHTML = " Total a Pagar: $" + precioFinal;
                    // console.log("Precio final: " + precioFinal);
                    break;
                case "trainee":
                    precioFinal = calcularPrecio(cantidadPersonas, descuentoTrainee, catSeleccionada)
                    // alert("Precio final: " + precioFinal);
                    elementPrecio.innerHTML = " Total a Pagar: $" + precioFinal;
                    // console.log("Precio final: " + precioFinal);
                    break;
                case "junior":
                    precioFinal = calcularPrecio(cantidadPersonas, descuentoJunior, catSeleccionada)
                    // alert("Precio final: " + precioFinal);
                    elementPrecio.innerHTML = " Total a Pagar: $" + precioFinal;
                    // console.log("Precio final: " + precioFinal);
                    break;

            }
        } else {

            categoria.addEventListener("input", function () {
                catSeleccionada = elementCategoria.value;
                // if (catSeleccionada != "selección") {
                switch (catSeleccionada) {
                    case "estudiante":
                        precioFinal = calcularPrecio(cantidadPersonas, descuentoEstudiante, catSeleccionada)
                        // alert("Precio final: " + precioFinal);
                        elementPrecio.innerHTML = " Total a Pagar: $" + precioFinal;
                        // console.log("Precio final: " + precioFinal);
                        descuentoAplicado = descuentoEstudiante;

                        break;
                    case "trainee":
                        precioFinal = calcularPrecio(cantidadPersonas, descuentoTrainee, catSeleccionada)
                        // alert("Precio final: " + precioFinal);
                        elementPrecio.innerHTML = " Total a Pagar: $" + precioFinal;
                        // console.log("Precio final: " + precioFinal);
                        descuentoAplicado = descuentoTrainee;

                        break;
                    case "junior":
                        precioFinal = calcularPrecio(cantidadPersonas, descuentoJunior, catSeleccionada)
                        // alert("Precio final: " + precioFinal);
                        elementPrecio.innerHTML = " Total a Pagar: $" + precioFinal;
                        // console.log("Precio final: " + precioFinal);
                        descuentoAplicado = descuentoJunior;

                        break;
                }
            })
        }
    } else if (cantidadPersonas == '') {
        elementPrecio.innerHTML = " Total a Pagar: $";
    }
});

function calcularPrecio(cantPersonas, cantidadDescuento, catSeleccionada) {
    let descuento = (cantidadDescuento * valorTicket) / 100;
    precioFinal = (valorTicket - descuento) * cantPersonas;
    return precioFinal;
}

const btn_borrar = document.getElementById("btn-borrar");

function borrarFormulario() {
    // const textoElemento = elementNombre.textContent;
    elementNombre.textContent = "";
    // alert("se hizo clikc en borrar");
}

btn_borrar.addEventListener("click", borrarFormulario);





//Funcion boton resumen

const btn_resumen = document.getElementById("btn-resumen");
const miModal = document.getElementById("miModal");
const cerrarModal = document.getElementById("cerrarModal");
let elementNombre = document.getElementById("nombre");
let elementApellido = document.getElementById("apellido");
let elementEmail = document.getElementById("email");
let resumenDetalle = document.getElementById("resumenDetalle");



document.getElementById("formulario").addEventListener('submit', function(event){
    event.preventDefault();
})

document.getElementById("btn-borrar").addEventListener('click', function(){
    elementPrecio.textContent="Total a Pagar: $";
})

btn_resumen.addEventListener("click", function () {
    if (elementNombre.value == '' || elementApellido.value == '' || elementEmail.value == '' || elementCantidad.value == '' || elementCategoria.value == '') {

    } else {
        miModal.style.display = "block";

        resumenDetalle.innerHTML = '<span class="centrarTitulo" style="font-size: 20px"><b><u>Resumen de compra</u></b></span><br>' + 'Nombre: ' + elementNombre.value + "<br>" +
            "Apellido: " + elementApellido.value + "<br>" +
            "Email: " + elementEmail.value + "<br>" +
            "Cantidad de personas: " + elementCantidad.value + "<br>" +
            "Categoria: " + elementCategoria.value + "<br>" +
            "Descuento aplicado: " + descuentoAplicado + "%" + "<br>" +
            "-----------------------------------------------<br>" +
            '<span style="font-size: 1.5em"><b>TOTAL A PAGAR: </b></span>' +
            '<span style="font-size: 1.5em"><b>$</b></span>' +
            '<span style="font-size: 1.5em"><b>' + precioFinal + '</b></span>';

    }

})

cerrarModal.addEventListener("click", function () {
    miModal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === miModal) {
        miModal.style.display = "none";
    }
});







