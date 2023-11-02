const valorTicket = 200;
const descuentoEstudiante = 80;
const descuentoTrainee = 50;
const descuentoJunior = 15;
let precioFinal;
let catSeleccionada;

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
        if (catSeleccionada != "selección") {
            switch (catSeleccionada) {
                case "estudiante":
                    precioFinal = calcularPrecio(cantidadPersonas, descuentoEstudiante, catSeleccionada)
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
                        break;
                }
            })
        }
    }else if(cantidadPersonas==''){
        elementPrecio.innerHTML = " Total a Pagar: $";
    }
});

function calcularPrecio(cantPersonas, cantidadDescuento, catSeleccionada) {
    let descuento = (cantidadDescuento * valorTicket) / 100;
    precioFinal = (valorTicket - descuento) * cantPersonas;
    return precioFinal;
}