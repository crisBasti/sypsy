const arrayPrueba = [
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


for (let propiedad in arrayPrueba) {
    console.log(propiedad)
}

console.log(Object.values(arrayPrueba))



const productosComestibles = [
    {id: 1, nombre: "simple", tipo: "sola", cantidad: 1, desc: "una sola carne", precio: 310, talle: "", img:"../imagenes/imgComestibles/Simple.jpeg", marca:"Altokee 15"},
    {id: 2, nombre: "Completa", tipo: "sola", cantidad: 1, desc: "1 Carne, Jamon, Queso, Huevo, Lechuga y tomate", precio: 350, talle: "", img:"../imagenes/imgComestibles/completa.jpg", marca:"Altokee15"},
    {id: 3, nombre: "cheddar 2x", tipo: "sola", cantidad: 1, desc: "2 Carnes , doble cheddar", precio: 390, talle: "", img:"../imagenes/imgComestibles/Cheddar_2x.jpeg", marca:"Altokee 15"},
    {id: 4, nombre: "Cheddar 3x", tipo: "sola", cantidad: 1, desc: "3 Carnes , triple cheddar", precio: 460, talle: "", img:"../imagenes/imgComestibles/Cheddar_3x.jpeg", marca:"Altokee 15"},
    {id: 5, nombre: "Cheddar 4x", tipo: "sola", cantidad: 1, desc: "4 Carnes , cuadruple cheddar", precio: 541, talle: "", img:"../imagenes/imgComestibles/cheddar-4x.jpeg", marca:"Altokee 15"},
    {id: 6, nombre: "Combo Simple", tipo: "combo", cantidad: 1, desc: "Hamburguesa simple + papas", precio: 480, talle: "", img:"../imagenes/imgComestibles/combo_hamb_mas_papas.jpeg", marca:"Altokee 15"},
    {id: 7, nombre: "Combo Completa", tipo: "combo", cantidad: 1, desc: "Hamburguesa completa + papas", precio: 530, talle: "", img:"../imagenes/imgComestibles/Combo_Completa_Tomates.jpeg", marca:"Altokee 15"},
    {id: 8, nombre: "Combo 2x", tipo: "combo", cantidad: 1, desc: "Hamburguesa cheddar 2x + papas", precio: 570, talle: "", img:"../imagenes/imgComestibles/combo-2x.jpg", marca:"Altokee 15"},
    {id: 9, nombre: "Combo 3x", tipo: "combo", cantidad: 1, desc: "Hamburguesa cheddar 3x + papas", precio: 640, talle: "", img:"../imagenes/imgComestibles/combo_hamb_mas_papas.jpeg", marca:"Altokee 15"},
    {id: 10, nombre: "Combo 4x", tipo: "combo", cantidad: 1, desc: "Hamburguesa cheddar 4x + papas", precio: 720, talle: "", img:"../imagenes/imgComestibles/combo4x+bebida.jpeg", marca:"Altokee 15"},
    {id: 11, nombre: "combo simple + Bebida", tipo: "combo bebida", cantidad: 1, desc: "Hamburguesa simple + papas + bebidas", precio: 610, talle: "", img:"../imagenes/imgComestibles/Combo_mas_Bebida_Altokke15.jpeg", marca:"Altokee 15"},
    {id: 12, nombre: "Combo Completa + Bebida", tipo: "combo bebida", cantidad: 1, desc: "Hamburguesa completa + papas + bebidas", precio: 620, talle: "", img:"../imagenes/imgComestibles/Combo_mas_Bebida_Altokke15.jpeg", marca:"Altokee 15"},
    {id: 13, nombre: "Combo 2x + bebida", tipo: "combo bebida", cantidad: 1, desc: "Hamburguesa 2x + papas + bebidas", precio: 700, talle: "", img:"../imagenes//imgComestibles/Combo_mas_Bebida_Altokke15.jpeg", marca:"Altokee 15"},
    {id: 14, nombre: "Combo 3x + bebida", tipo: "combo bebida", cantidad: 1, desc: "Hamburguesa 3x + papas + bebidas", precio: 711, talle: "", img:"../imagenes//imgComestibles/Combo_mas_Bebida_Altokke15.jpeg", marca:"Altokee 15"},
    {id: 15, nombre: "Combo 4x + bebida", tipo: "combo bebida", cantidad: 1, desc: "Hamburguesa 4x + papas + bebidas", precio: 821, talle: "", img:"../imagenes/imgComestibles/combo4x+bebida.jpeg", marca:"Altokee 15"},
    {id: 16, nombre: "Cono Papas", tipo: "cono", cantidad: 1, desc: "Cono de papas", precio: 210, talle: "", img:"../imagenes/imgComestibles/bandeja_dePapas.jpeg", marca:"Altokee 15"},
    {id: 17, nombre: "Bandeja papas Chica", tipo: "comida", cantidad: 1, desc: "Papas", precio: 260, talle: "", img:"../imagenes/imgComestibles/bandeja_dePapas.jpeg", marca:"Altokee 15"},
    {id: 18, nombre: "Bandeja papas Grande", tipo: "comida", cantidad: 1, desc: "Papas", precio: 360, talle: "", img:"../imagenes/imgComestibles/bandeja_dePapas.jpeg", marca:"Altokee15"},
    {id: 19, nombre: "Salchipapas chico", tipo: "comida", cantidad: 1, desc: "Papas , salchicha , huevo y adheresos", precio: 360, talle: "", img:"../imagenes/imgComestibles/salchipapa.jpg", marca:"Altokee15"},
    {id: 20, nombre: "Salchipapas grande", tipo: "comida", cantidad: 1, desc: "Papas , salchicha , huevo y adheresos", precio: 411, talle: "", img:"../imagenes/imgComestibles/salchipapa.jpg", marca:"Altokee15"},
    {id: 21, nombre: "Papas @Altokee15", tipo: "comida", cantidad: 1, desc: "Papas , Cheddar , Bacon , Perejil , Verdeo", precio: 511, talle: "", img:"../imagenes/imgComestibles/papas-altokee.jpg", marca:"Altokee15"},
    {id: 22, nombre: "Caja de Papas", tipo: "comida", cantidad: 1, desc: "Caja de Papas con adicional de cheddar", precio: 700, talle: "", img:"../imagenes/imgComestibles/Caja_De_Papas_Adicional.jpeg", marca:"Altokee15"},
    {id: 23, nombre: "Tortas Por Pedido", tipo: "Tortas", cantidad: 1, desc: "Tortas por pedido , distintos tamaños, y decorados", precio: 2800, talle: "", img:"../imagenes/imgComestibles/cuatro_tortas.jpeg", marca:"El Clan de las Donas"},
    {id: 24, nombre: "Porcion de torta", tipo: "comida", cantidad: 1, desc: "Porcion de torta de chocolte con mousse de chocolate", precio: 350, talle: "", img:"../imagenes/imgComestibles/frutilla_chocolate.jpeg", marca:"El Clan de las Donas"},
    {id: 25, nombre: "Porcion de torta", tipo: "comida", cantidad: 1, desc: "Porcion de torta sabor vainilla", precio: 350, talle: "", img:"../imagenes/imgComestibles/frutilla_vainilla.jpeg", marca:"El Clan de las Donas"},
    {id: 26, nombre: "Tortas Por pedido y por porcion", tipo: "comida", cantidad: 1, desc: "Se hacen tortas por pedido. Tortas Personalizadas", precio: 2800, talle: "", img:"../imagenes/imgComestibles/mediaTorta.jpeg", marca:"El Clan de las Donas"},
    {id: 27, nombre: "Pastafrolas Por pedido", tipo: "comida", cantidad: 1, desc: "Las Mas ricas pastafrolas Caseras", precio: 950, talle: "", img:"../imagenes/imgComestibles/pastafrolas_cafe.jpeg", marca:"Altokee15"},
    {id: 28, nombre: "Selva Negra", tipo: "comida", cantidad: 1, desc: "Torta Selva negra Por pedido", precio: 2800, talle: "", img:"../imagenes/imgComestibles/selvaNegra.jpeg", marca:"Altokee15"},
    {id: 29, nombre: "Torta de Chocolate", tipo: "comida", cantidad: 1, desc: "Torta decorada de Chocolate", precio: 2800, talle: "", img:"../imagenes/imgComestibles/torta_choco.jpeg", marca:"Altokee15"},
    {id: 30, nombre: "Torta de Durazno", tipo: "comida", cantidad: 1, desc: "Torta decorada con crema y durazno", precio: 2800, talle: "", img:"../imagenes/imgComestibles/tortaDurazno.jpeg", marca:"El Clan de las Donas"},
    {id: 31, nombre: "Torta Rocklers", tipo: "comida", cantidad: 1, desc: "Torta decorada con crema y detalles de rockers. Por pedido", precio: 2800, talle: "", img:"../imagenes/imgComestibles/tortaRocklets.jpeg", marca:"El Clan de las Donas"},
    {id: 32, nombre: "Postrecitos surtidos", tipo: "comida", cantidad: 1, desc: "Postrecitos sabor frutilla, chocotorta y oreo", precio: 420, talle: "", img:"../imagenes/imgComestibles/postres_surtidos.jpeg", marca:"Altokee15"},
    {id: 33, nombre: "Empanadas Al estilo Tucumano", tipo: "comida", cantidad: 1, desc: "Las mas ricas empanadas al estilo tucumano. Sabores : -Carne cortada a cuchillo. -Pollo. -Matambre. -Mondongo . Fritas. la Docena $1500", precio: 1500, talle: "", img:"../imagenes/imgComestibles/empanadasFritasLa28.jpeg", marca:"Minutas La 28"},
    {id: 34, nombre: "Sandwich Mila", tipo: "comida", cantidad: 1, desc: "El mas rico sandwich al Estilo Tucumano. Carne y Pollo. Lechuga y tomate", precio: 650, talle: "", img:"../imagenes/imgComestibles/sandwichMilaCarneLa28.jpeg", marca:"Minutas La 28"}
]