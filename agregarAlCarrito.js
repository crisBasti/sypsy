const container = document.getElementById('container');

// const carritoContenedor = document.getElementById('carrito-contenedor');

const botonVaciar = document.getElementById('vaciar-carrito');

const contadorCarrito = document.getElementById('contadorCarrito');

const precioProducto = document.getElementById('precioProducto');

const precioTotal = document.getElementById('precioTotal');

const modal = document.getElementById('modal');

const modalContainer = document.getElementById('modal__container');

const btnCarrito = document.getElementById('boton-carrito');

const pagarTotal = document.getElementById('pagarTotal');

const btnCloseCarrito = document.getElementById('modal__close');




pagarTotal.addEventListener('click', ()=>{
    alert('confirmar pago?')
})

btnCarrito.addEventListener('click', (e)=>{
    e.preventDefault;
    modal.classList.add('modal--show')
})

btnCloseCarrito.addEventListener('click', (e)=>{
    e.preventDefault;
    modal.classList.remove('modal--show')
})


let carrito = [];

botonVaciar.addEventListener('click', ()=>{
    carrito.length = 0;
    actualizarCarrito()
    document.getElementById('vaciar-carrito').style.display = 'none';
    document.getElementById('precioProducto').style.display = 'none';
    document.getElementById('pagarTotal').style.display = 'none';

})

productosElectro.forEach((producto)=> {
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p> $: ${producto.precio}</p>
    <p class="precioProducto">Precio: $ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `

    container.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
        document.getElementById('vaciar-carrito').style.display = 'block';
        document.getElementById('precioProducto').style.display = 'block';
        document.getElementById('pagarTotal').style.display = 'block';




    })
})

const agregarAlCarrito = (prodId) => {
    const item = productosElectro.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
}

const eliminarDelCarrito = () => (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1);
    actualizarCarrito()
}

const actualizarCarrito = () => {
    modalContainer.innerHTML= "";

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $ ${prod.precio}</p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        <hr>
        `

        modalContainer.appendChild(div)
    })
    contadorCarrito.innerHTML = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}