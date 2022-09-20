const contenedor = document.getElementById('container');


const productosElectro = [
    {id: 1, nombre: "Auriculares Samsung", tipo: "auricular", cantidad: 1, desc: "Nuevo en caja se conecta con cable, color blanco,", precio: 500, talle: "", img:"../imagenes/imgElectro/auricularesSamsung.jpeg", marca:"Samsung"},
    {id: 2, nombre: "Cargador 4.2A", tipo: "cargador", cantidad: 1, desc: "Color blanco, se conecta con cable usb extraible, Nuevo en caja", precio: 1200, talle: "", img:"../imagenes/imgElectro/cargador-inova.jpeg", marca:"Inova"},
    {id: 3, nombre: "Cable usb", tipo: "USB", cantidad: 1, desc: "Color negro, nuevo en caja", precio: 700, talle: "", img:"../imagenes/imgElectro/cableUSB.jpeg", marca:"Mobile"},
    {id: 4, nombre: "Cargador para Iphone", tipo: "Cargador", cantidad: 1, desc: "Color blanco, se conecta con cable USB extraible. Nuevo en caja", precio: 1500, talle: "", img:"../imagenes/imgElectro/cargadorApple.jpeg", marca:"Apple"},
    {id: 5, nombre: "Prolongador Multiple", tipo: "Extencion usb", cantidad: 1, desc: "Color blanco, se conecta con cable, 4 puertos USB 3.0 , 1 toma corriente plano triple. Nuevo en caja", precio: 650, talle: "", img:"../imagenes/imgElectro/prolongadorInova.jpeg", marca:"Inova"},
    {id: 6, nombre: "Foco boliche", tipo: "Lampara", cantidad: 1, desc: "proyecta luces de Colores, se conecta a rosca . Nuevo en caja", precio: 500, talle: "", img:"../imagenes/imgElectro/lamparaLuminosa.jpeg", marca:"Crosley"},
    {id: 7, nombre: "Auriculares Wireless P47", tipo: "auricular bluetooth", cantidad: 1, desc: "Color negro, se conecta con cable, via bluetooth. se carga con mini USB. Nuevo en caja", precio: 1800, talle: "", img:"../imagenes/imgElectro/AuricularP47.jpeg", marca:"P47"},
    {id: 8, nombre: "Termometro", tipo: "digital", cantidad: 1, desc: "Color blanco, funciona a pilas. Nuevo en caja", precio: 500, talle: "", img:"../imagenes/imgElectro/termometroDigital.jpeg", marca:"China"},
    {id: 9, nombre: "Parlante mini", tipo: "Parlante", cantidad: 1, desc: "Colores varios, se conecta con cable, via bluetooth. Nuevo en caja", precio: 500, talle: "", img:"../imagenes/imgElectro/paarlantesMini.jpeg", marca:"China"},
    {id: 10, nombre: "Balanza de Precision", tipo: "Digital", cantidad: 1, desc: "Color Gris, se carga con cable mini usb. Nuevo en caja", precio: 2000, talle: "", img:"../imagenes/imgElectro/balanzaPrecision.jpeg", marca:"Shirka"},
    {id: 11, nombre: "Laser", tipo: "Led", cantidad: 1, desc: "Color negro, fnciona a pilas. Nuevo en caja", precio: 800, talle: "", img:"../imagenes/imgElectro/laser.jpeg", marca:"China"},
    {id: 12, nombre: "Auriculares Y47", tipo: "Auricular", cantidad: 1, desc: "Color rosa, se conecta con cable, via Bluetooth. Se carga con mini usb. Nuevo en caja", precio: 2500, talle: "", img:"../imagenes/imgElectro/auricularesY47.jpeg", marca:"Y47"},
    {id: 13, nombre: "Teclado weibo Luminoso", tipo: "kit luminoso", cantidad: 1, desc: "Kit gamer. Teclado y mouse luminosos. Teclado estatico y mouse retro Luminico. Nuevo en caja", precio: 4500, talle: "", img:"../imagenes/imgElectro/Teclado-Weibo.jpeg", marca:"Y47"}
]

const arrayPrueba = ["cintia", "cristian", "leyza", "Ezequiel", "alan", "damaris"];


const fragmentoProductos = document.createDocumentFragment();

productosElectro.forEach(el =>{
    
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <h2>${el.nombre}</h2>
    <img src="${el.img}">
    <p>$ ${el.precio}</p>
    <button class="btn__agregar">Agregar</button>
    `;
    fragmentoProductos.appendChild(div);

})

contenedor.appendChild(fragmentoProductos)