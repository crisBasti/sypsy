const arrayPrueba = [
    {id: "", nombre: "simple", tipo: "sola", cantidad: 1, desc: "una sola carne", precio: 310, talle: "", img:"../imagenes/imgComestibles/Simple.jpeg", marca:"Altokee 15"},
    {id: "", nombre: "Completa", tipo: "sola", cantidad: 1, desc: "Una Carne, Jamon, Queso, Huevo, Lechuga y tomate", precio: 350, talle: "", img:"../imagenes/imgComestibles/completa.jpg", marca:"Altokee15"},
    {id: "", nombre: "cheddar 2x", tipo: "sola", cantidad: 1, desc: "", precio: 700, talle: "", img:"../imagenes/imgElectro/cableUSB.jpeg", marca:"Mobile"},
    {id: "", nombre: "Cheddar 3x", tipo: "sola", cantidad: 1, desc: "", precio: 1500, talle: "", img:"../imagenes/imgElectro/cargadorApple.jpeg", marca:"Apple"},
    {id: "", nombre: "Cheddar 4x", tipo: "sola", cantidad: 1, desc: "", precio: 650, talle: "", img:"../imagenes/imgElectro/prolongadorInova.jpeg", marca:"Inova"},
    {id: "", nombre: "Combo Simple", tipo: "combo", cantidad: 1, desc: "", precio: 500, talle: "", img:"../imagenes/imgElectro/lamparaLuminosa.jpeg", marca:"Crosley"},
    {id: "", nombre: "Combo Completa", tipo: "combo", cantidad: 1, desc: "", precio: 1800, talle: "", img:"../imagenes/imgElectro/AuricularP47.jpeg", marca:"P47"},
    {id: "", nombre: "Combo 2x", tipo: "combo", cantidad: 1, desc: "", precio: 500, talle: "", img:"../imagenes/imgElectro/termometroDigital.jpeg", marca:"China"},
    {id: "", nombre: "Combo 3x", tipo: "combo", cantidad: 1, desc: "", precio: 500, talle: "", img:"../imagenes/imgElectro/paarlantesMini.jpeg", marca:"China"},
    {id: "", nombre: "Combo 4x", tipo: "combo", cantidad: 1, desc: "", precio: 2000, talle: "", img:"../imagenes/imgElectro/balanzaPrecision.jpeg", marca:"Shirka"},
    {id: "", nombre: "combo simple + Bebida", tipo: "combo bebida", cantidad: 1, desc: "", precio: 800, talle: "", img:"../imagenes/imgElectro/laser.jpeg", marca:"China"},
    {id: "", nombre: "Combo Completa + Bebida", tipo: "combo bebida", cantidad: 1, desc: "", precio: 2500, talle: "", img:"../imagenes/imgElectro/auricularesY47.jpeg", marca:"Y47"},
    {id: "", nombre: "Combo 2x + bebida", tipo: "combo bebida", cantidad: 1, desc: "Kit gamer. Teclado y mouse luminosos. Teclado estatico y mouse retro Luminico. Nuevo en caja", precio: 4500, talle: "", img:"../imagenes/imgElectro/Teclado-Weibo.jpeg", marca:"Y47"},
    {id: "", nombre: "Combo 3x + bebida", tipo: "combo bebida", cantidad: 1, desc: "Kit gamer. Teclado y mouse luminosos. Teclado estatico y mouse retro Luminico. Nuevo en caja", precio: 4500, talle: "", img:"../imagenes/imgElectro/Teclado-Weibo.jpeg", marca:"Y47"},
    {id: "", nombre: "Combo 4x + bebida", tipo: "combo bebida", cantidad: 1, desc: "Kit gamer. Teclado y mouse luminosos. Teclado estatico y mouse retro Luminico. Nuevo en caja", precio: 4500, talle: "", img:"../imagenes/imgElectro/Teclado-Weibo.jpeg", marca:"Y47"},
    {id: "", nombre: "Cono Papas", tipo: "comno", cantidad: 1, desc: "Kit gamer. Teclado y mouse luminosos. Teclado estatico y mouse retro Luminico. Nuevo en caja", precio: 4500, talle: "", img:"../imagenes/imgElectro/Teclado-Weibo.jpeg", marca:"Y47"},
    {id: "", nombre: "Papas", tipo: "comida", cantidad: 1, desc: "Papas , Cheddar , Bacon , Perejil , Verdeo", precio: 511, talle: "", img:"../imagenes/imgComestibles/papas-altokee.jpg", marca:"Altokee15"},
    {id: "", nombre: "Bandeja papas Chica", tipo: "comida", cantidad: 1, desc: "Papas", precio: 260, talle: "", img:"../imagenes/imgComestibles/papas-altokee.jpg", marca:"Altokee 15"},
    {id: "", nombre: "Bandeja papas Grande", tipo: "comida", cantidad: 1, desc: "Papas", precio: 360, talle: "", img:"../imagenes/imgComestibles/papas-altokee.jpg", marca:"Altokee15"},
    {id: "", nombre: "Salchipapas chico", tipo: "comida", cantidad: 1, desc: "Papas , salchicha , huevo y adheresos", precio: 360, talle: "", img:"../imagenes/imgComestibles/salchipapa.jpg", marca:"Altokee15"},
    {id: "", nombre: "Salchipapas grande", tipo: "comida", cantidad: 1, desc: "Papas , salchicha , huevo y adheresos", precio: 411, talle: "", img:"../imagenes/imgComestibles/salchipapa.jpg", marca:"Altokee15"},
    {id: "", nombre: "Papas @Altokee15", tipo: "comida", cantidad: 1, desc: "Papas , Cheddar , Bacon , Perejil , Verdeo", precio: 511, talle: "", img:"../imagenes/imgComestibles/papas-altokee.jpg", marca:"Altokee15"}
]


for (let propiedad in arrayPrueba) {
    console.log(propiedad)
}

console.log(Object.values(arrayPrueba))



const productosComestibles = [
    {id: 1, nombre: "simple", tipo: "sola", cantidad: 1, desc: "una sola carne", precio: 310, talle: "", img:"../imagenes/imgComestibles/Simple.jpeg", marca:"Altokee 15"},
    {id: 2, nombre: "Completa", tipo: "sola", cantidad: 1, desc: "Una Carne, Jamon, Queso, Huevo, Lechuga y tomate", precio: 350, talle: "", img:"../imagenes/imgComestibles/completa.jpg", marca:"Altokee15"},
    {id: 3, nombre: "cheddar 2x", tipo: "sola", cantidad: 1, desc: "", precio: 700, talle: "", img:"../imagenes/imgElectro/cableUSB.jpeg", marca:"Mobile"},
    {id: 4, nombre: "Cheddar 3x", tipo: "sola", cantidad: 1, desc: "", precio: 1500, talle: "", img:"../imagenes/imgElectro/cargadorApple.jpeg", marca:"Apple"},
    {id: 5, nombre: "Cheddar 4x", tipo: "sola", cantidad: 1, desc: "", precio: 650, talle: "", img:"../imagenes/imgElectro/prolongadorInova.jpeg", marca:"Inova"},
    {id: 6, nombre: "Combo Simple", tipo: "combo", cantidad: 1, desc: "", precio: 500, talle: "", img:"../imagenes/imgElectro/lamparaLuminosa.jpeg", marca:"Crosley"},
    {id: 7, nombre: "Combo Completa", tipo: "combo", cantidad: 1, desc: "", precio: 1800, talle: "", img:"../imagenes/imgElectro/AuricularP47.jpeg", marca:"P47"},
    {id: 8, nombre: "Combo 2x", tipo: "combo", cantidad: 1, desc: "", precio: 500, talle: "", img:"../imagenes/imgElectro/termometroDigital.jpeg", marca:"China"},
    {id: 9, nombre: "Combo 3x", tipo: "combo", cantidad: 1, desc: "", precio: 500, talle: "", img:"../imagenes/imgElectro/paarlantesMini.jpeg", marca:"China"},
    {id: 10, nombre: "Combo 4x", tipo: "combo", cantidad: 1, desc: "", precio: 2000, talle: "", img:"../imagenes/imgElectro/balanzaPrecision.jpeg", marca:"Shirka"},
    {id: 11, nombre: "combo simple + Bebida", tipo: "combo bebida", cantidad: 1, desc: "", precio: 800, talle: "", img:"../imagenes/imgElectro/laser.jpeg", marca:"China"},
    {id: 12, nombre: "Combo Completa + Bebida", tipo: "combo bebida", cantidad: 1, desc: "", precio: 2500, talle: "", img:"../imagenes/imgElectro/auricularesY47.jpeg", marca:"Y47"},
    {id: 13, nombre: "Combo 2x + bebida", tipo: "combo bebida", cantidad: 1, desc: "Kit gamer. Teclado y mouse luminosos. Teclado estatico y mouse retro Luminico. Nuevo en caja", precio: 4500, talle: "", img:"../imagenes/imgElectro/Teclado-Weibo.jpeg", marca:"Y47"},
    {id: 14, nombre: "Combo 3x + bebida", tipo: "combo bebida", cantidad: 1, desc: "Kit gamer. Teclado y mouse luminosos. Teclado estatico y mouse retro Luminico. Nuevo en caja", precio: 4500, talle: "", img:"../imagenes/imgElectro/Teclado-Weibo.jpeg", marca:"Y47"},
    {id: 15, nombre: "Combo 4x + bebida", tipo: "combo bebida", cantidad: 1, desc: "Kit gamer. Teclado y mouse luminosos. Teclado estatico y mouse retro Luminico. Nuevo en caja", precio: 4500, talle: "", img:"../imagenes/imgElectro/Teclado-Weibo.jpeg", marca:"Y47"},
    {id: 16, nombre: "Cono Papas", tipo: "comno", cantidad: 1, desc: "Kit gamer. Teclado y mouse luminosos. Teclado estatico y mouse retro Luminico. Nuevo en caja", precio: 4500, talle: "", img:"../imagenes/imgElectro/Teclado-Weibo.jpeg", marca:"Y47"},
    {id: 17, nombre: "Papas", tipo: "comida", cantidad: 1, desc: "Papas , Cheddar , Bacon , Perejil , Verdeo", precio: 511, talle: "", img:"../imagenes/imgComestibles/papas-altokee.jpg", marca:"Altokee15"},
    {id: 18, nombre: "Bandeja papas Chica", tipo: "comida", cantidad: 1, desc: "Papas", precio: 260, talle: "", img:"../imagenes/imgComestibles/papas-altokee.jpg", marca:"Altokee 15"},
    {id: 19, nombre: "Bandeja papas Grande", tipo: "comida", cantidad: 1, desc: "Papas", precio: 360, talle: "", img:"../imagenes/imgComestibles/papas-altokee.jpg", marca:"Altokee15"},
    {id: 20, nombre: "Salchipapas chico", tipo: "comida", cantidad: 1, desc: "Papas , salchicha , huevo y adheresos", precio: 360, talle: "", img:"../imagenes/imgComestibles/salchipapa.jpg", marca:"Altokee15"},
    {id: 21, nombre: "Salchipapas grande", tipo: "comida", cantidad: 1, desc: "Papas , salchicha , huevo y adheresos", precio: 411, talle: "", img:"../imagenes/imgComestibles/salchipapa.jpg", marca:"Altokee15"},
    {id: 22, nombre: "Papas @Altokee15", tipo: "comida", cantidad: 1, desc: "Papas , Cheddar , Bacon , Perejil , Verdeo", precio: 511, talle: "", img:"../imagenes/imgComestibles/papas-altokee.jpg", marca:"Altokee15"}
]

