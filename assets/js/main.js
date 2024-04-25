/*==================== Slider ====================*/

const slider = document.querySelector(".sliderContainer");
const menuObjetos = document.querySelectorAll(".menuObjeto");

let productoElegido = productos[0]

const productoImgActual = document.querySelector(".productoImg");
const productoTituloActual = document.querySelector(".productoTitulo");
const productoPreciogActual = document.querySelector(".productoPrecio");
const productoColoresActual = document.querySelectorAll(".color");
const productoSizesActual = document.querySelectorAll(".size");

menuObjetos.forEach(function (objeto, i) {
    objeto.addEventListener("click", function () {
        //cambiar la diapositiva actual
        slider.style.transform = `translateX(${-100 * i}vw)`;

        //Cambiar el producto elegido
        productoElegido = productos[i];

        //Cambiar los datos del producto actual
        productoTituloActual.textContent = productoElegido.titulo;
        productoPreciogActual.textContent = productoElegido.precio;
        productoImgActual.src = productoElegido.colores[0].img

        //Asignamos colores al producto elegido
        productoColoresActual.forEach((color, i) => {
            if (i < productoElegido.colores.length) {
                color.style.backgroundColor = productoElegido.colores[i].code;
            } else color.style.display = "none";
        })
    });
});

productoColoresActual.forEach(function (color, i) {
    color.addEventListener("click", () => {
        productoImgActual.src = productoElegido.colores[i].img;
    })
})

productoSizesActual.forEach(function (size, i) {
    size.addEventListener("click", function () {
        productoSizesActual.forEach(function (size) {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})

/*==================== Producto Seleccionado ====================*/

const AnadirCesta = document.querySelector("#AnadirCesta");
const productoSeleccionado = document.getElementById("productoSeleccionado");
const botonContinuarComprando = document.getElementById("botonContinuarComprando");
const realizarPago = document.getElementById("realizarPago");

AnadirCesta.addEventListener("click", function () {
    productoSeleccionado.style.display = "block";
});

botonContinuarComprando.addEventListener("click", function () {
    productoSeleccionado.style.display = "none";
});

/*==================== Iniciar sesión ====================*/

const iniciarSesion = document.getElementById('iniciarSesion');
const iniciarSesionForm = document.getElementById('iniciarSesionForm');
const cerrarInicioSesion = document.querySelector('.cerrarInicioSesion');

iniciarSesion.addEventListener('click', function () {
    iniciarSesionForm.style.display = 'block';
});

cerrarInicioSesion.addEventListener('click', function () {
    iniciarSesionForm.style.display = 'none';
});