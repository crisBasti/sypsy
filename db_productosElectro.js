const productosElectro = [
    {id: 1, nombre: "BGH 2 tr baja silueta on/of", tipo: "F/C", cantidad: 1, desc: "Nuevo", precio: 420000, talle: "", img:"../imagenes/imgElectro/Baja_Silueta_on-off.jpeg", marca:"BGH"},
    {id: 2, nombre: "Runway 3 tr baja silueta on-off", tipo: "F/C", cantidad: 1, desc: "Nuevo", precio: 461000, talle: "", img:"../imagenes/imgElectro/baja_silueta_Runway_3tr.jpeg", marca:"Runway"},
    {id: 3, nombre: "BGH 5 tr baja silueta", tipo: "F/C", cantidad: 1, desc: "Nuevo", precio: 634000, talle: "", img:"../imagenes/imgElectro/baja_silueta_5tr_bgh.jpg", marca:"BGH"},
    {id: 4, nombre: "Runway 6 tr baja silueta on-off", tipo: "F/C", cantidad: 1, desc: "Nuevo", precio: 629000, talle: "", img:"../imagenes/imgElectro/baja_silueta_Runway_3tr.jpeg", marca:"Y47"},
    {id: 5, nombre: "Split tipo mural BGH Inverter 3000 fr", tipo: "inverter", cantidad: 1, desc: "Nuevo", precio: 146300, talle: "", img:"../imagenes/imgElectro/split_inverter_BGH_3000fr.jpg", marca:"Y47"},
    {id: 6, nombre: "Split tipo mural cooltime BGH Inverter 4500 fr", tipo: "Inverter", cantidad: 1, desc: "Nuevo", precio: 231000, talle: "", img:"../imagenes/imgElectro/cooltime_bgh_inverter_4500fr.png", marca:"BGH"},
    {id: 7, nombre: "Split tipo mural cooltime BGH Inverter 5500 fr", tipo: "Inverter", cantidad: 1, desc: "Nuevo", precio: 271000, talle: "", img:"../imagenes/imgElectro/cooltime_bgh_inverter_4500fr.png", marca:"Y47"},
    {id: 8, nombre: "Teclado weibo Luminoso", tipo: "kit luminoso", cantidad: 1, desc: "Kit gamer. Teclado y mouse luminosos. Teclado estatico y mouse retro Luminico. Nuevo en caja", precio: 4500, talle: "", img:"../imagenes/imgElectro/Teclado-Weibo.jpeg", marca:"Weibo"},
    {id: 9, nombre: "Heladera", tipo: "Electro", cantidad: 1, desc: "Funcionando todo en Perfecto estado. Usado", precio: 30000, talle: "", img:"../imagenes/imgElectro/HeladeraDonA.jpeg", marca:"Alelux"},
    {id: 10, nombre: "Samsung Galaxy A32", tipo: "Celular", cantidad: 1, desc: "Poco uso . Esta como nuevo . Liberado de fabrica.", precio: 45000, talle: "", img:"../imagenes/imgElectro/galaxyA32.jpeg", marca:"Samsung"},
    {id: 11, nombre: "Combo Potencia Parlantes", tipo: "Electro", cantidad: 1, desc: "Potencia mas Parlantes. Nuevo. Precio de contado", precio: 100000, talle: "", img:"../imagenes/imgElectro/combo-potencia-parlantes.jpeg", marca:"Yessi"},
    {id: 12, nombre: "Combo Potencia Parlantes Dobles", tipo: "Electro", cantidad: 1, desc: "Potencia mas Parlantes. Nuevo. Precio de contado", precio: 126000, talle: "", img:"../imagenes/imgElectro/combo-potencia-parlantesdobles.jpeg", marca:"Yessi"},
    {id: 13, nombre: "Lavarropas + Secarropas", tipo: "Electro", cantidad: 1, desc: "Lavarropas CODINI 10 KG. + Secarropas CODINI 6,5 kg. NUEVOS. Precio Contado", precio: 49900, talle: "", img:"../imagenes/imgElectro/combo-lavasecarropas.jpeg", marca:"Yessi"},
    {id: 14, nombre: "Heladera Batea Exibidora", tipo: "Electro", cantidad: 1, desc: "Heladera Batea Exibidora, frente de vidrio, Nueva. Precio de Contado", precio: 396480, talle: "", img:"../imagenes/imgElectro/exibidora-carniceria.jpeg", marca:"Yessi"}
]



//     productos sacados de la base de datos Elecro
//     {id: 12, nombre: "Prolongador Multiple", tipo: "Extencion usb", cantidad: 1, desc: "Color blanco, se conecta con cable, 4 puertos USB 3.0 , 1 toma corriente plano triple. Nuevo en caja", precio: 650, talle: "", img:"../imagenes/imgElectro/prolongadorInova.jpeg", marca:"Inova"},
//     {id: 13, nombre: "Foco bolichero", tipo: "Lampara", cantidad: 1, desc: "proyecta luces de Colores, se conecta a rosca . Nuevo en caja", precio: 500, talle: "", img:"../imagenes/imgElectro/lamparaLuminosa.jpeg", marca:"Crosley"},
//     {id: 14, nombre: "Auriculares Wireless P47", tipo: "auricular bluetooth", cantidad: 1, desc: "Color negro, se conecta con cable, via bluetooth. se carga con mini USB. Nuevo en caja", precio: 1800, talle: "", img:"../imagenes/imgElectro/AuricularP47.jpeg", marca:"P47"},
//     {id: 15, nombre: "Termometro Digital", tipo: "digital", cantidad: 1, desc: "Color blanco, funciona a pilas. Nuevo en caja", precio: 500, talle: "", img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/959/045/products/termometro-digital-with-beeper-lcd-ninos-y-adultos-d_nq_np_777369-mla42089293885_062020-f1-094448def914b4d10815986418223840-640-0.jpg", marca:"China"},
//     {id: 16, nombre: "Parlante mini", tipo: "Parlante", cantidad: 1, desc: "Colores varios, se conecta con cable, via bluetooth. Nuevo en caja", precio: 500, talle: "", img:"../imagenes/imgElectro/paarlantesMini.jpeg", marca:"China"},
//     {id: 17, nombre: "Balanza de Precision", tipo: "Digital", cantidad: 1, desc: "Color Gris, se carga con cable mini usb. Nuevo en caja", precio: 2000, talle: "", img:"../imagenes/imgElectro/balanzaPrecision.jpeg", marca:"Shirka"},
//     {id: 18, nombre: "Laser larga distancia", tipo: "Led", cantidad: 1, desc: "Color negro, fnciona a pilas. Nuevo en caja", precio: 800, talle: "", img:"../imagenes/imgElectro/laser.jpeg", marca:"China"},
//     {id: 19, nombre: "Auriculares Y47", tipo: "Auricular", cantidad: 1, desc: "Color rosa, se conecta con cable, via Bluetooth. Se carga con mini usb. Nuevo en caja", precio: 2500, talle: "", img:"../imagenes/imgElectro/auricularesY47.jpeg", marca:"Y47"},