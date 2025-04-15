const productosVarios = [
    {id: 1, nombre: "15 metros de caño de cobre 1/4", tipo: "Para Refrigeracion", cantidad: 1, desc: "Caño de 1/4 para instalacion de aire acondicionado. Nuevo", precio: 16000, talle: "", img:"../imagenes/imgVarios/caño_bronce_varias_medidas.jpg", marca:""},
    {id: 2, nombre: "15 metros de caño de cobre 1/2", tipo: "Para Refrigeracion", cantidad: 1, desc: "Caño de 1/2 para instalacion de aire acondicionado. Nuevo en caja", precio: 28000, talle: "", img:"../imagenes/imgVarios/caño_bronce_varias_medidas.jpg", marca:""},
    {id: 3, nombre: "15 metros de caño de cobre 3/8", tipo: "Para Refrigeracion", cantidad: 1, desc: "Caño de 3/8 para instalacion de aire acondicionado. Nuevo", precio: 23000, talle: "", img:"../imagenes/imgVarios/caño_bronce_varias_medidas.jpg", marca:""},
    {id: 4, nombre: "kit Instalacion aire acondicionado", tipo: "kit para instalacion hasta 4500 fr", cantidad: 1, desc: "3mts caño , aislante, cinta, mensulas, patitas de goma, tornillos, tarugos, manguera de cristal, cable. Nuevo", precio: 18500, talle: "", img:"../imagenes/imgVarios/kit_instalacion_hasta_4500fr.jpeg", marca:""},
    {id: 5, nombre: "Combo de 3 Pur", tipo: "varios", cantidad: 1, desc: "Perfume , Desodorante , Crema para manos. Nueva", precio: 2500, talle: "", img:"../imagenes/imgVarios/combo_de_3_pur_blanca.jpeg", marca:"Sarten Cucina Donna"},
    {id: 6, nombre: "Combo Mensulas Gas R410", tipo: "Refrigeracion", cantidad: 1, desc: "Combo de 10 juegos de mensulas + 1 garrafa R410", precio: 50140, talle: "", img:"../imagenes/imgVarios/comboR410_mensulas.jpeg", marca:"ServiFrio"},
    {id: 7, nombre: "Combo Mensulas Gas R410 Cable 5 x 1,5 x 100 mts", tipo: "Refrigeracion", cantidad: 1, desc: "Combo de 10 juegos de mensulas + 1 garrafa R410 + Rollo de cable 5 x 1,5 x 100 mts", precio: 68080, talle: "", img:"../imagenes/imgVarios/combo_R410_cable_mensulas.jpeg", marca:"ServiFrio"},
    {id: 8, nombre: "Tirantes De Madera", tipo: "Construccion", cantidad: 4, desc: "4 Tirantes de Madera. Medidas: 4mts largo. El Precio es por los 4", precio: 12000, talle: "", img:"../imagenes/imgVarios/tirantesMadera.jpeg", marca:"Alelux"},
    {id: 9, nombre: "Cama 1 plaza", tipo: "mueble", cantidad: 1, desc: "Cama color rosa . Usada. 1 Plaza", precio: 5000, talle: "", img:"../imagenes/imgVarios/camaRosada.jpeg", marca:"Alelux"},
    {id: 10, nombre: "Puertas Persiana", tipo: "Puertas", cantidad: 6, desc: "Puertas persiana de madera, son 3 pares de puertas . Usadas. medidas : 63cm x 207 Mts. El precio es por las 6", precio: 20000, talle: "", img:"../imagenes/imgVarios/puertasPercianas.jpeg", marca:"Alelux"},
    {id: 11, nombre: "Comoda Cajonera", tipo: "Mueble", cantidad: 1, desc: "Comoda cajonera, con vidrio arriba. Manijas de Bronce", precio: 15000, talle: "", img:"../imagenes/imgVarios/comodaCajonera.jpeg", marca:"Alelux"},
    {id: 12, nombre: "Ropero", tipo: "Mueble", cantidad: 1, desc: "Ropero 3 Cuerpos. Con Puerta espejo. Usado", precio: 36000, talle: "", img:"../imagenes/imgVarios/RoperoNarnia.jpeg", marca:"Alelux"},
    {id: 13, nombre: "Mueble Esquinero", tipo: "Mueble", cantidad: 1, desc: "Mueble esquinero, de madera, Puerta rebatible. Usado", precio: 12000, talle: "", img:"../imagenes/imgVarios/muebleEsquinero.jpeg", marca:"Alelux"},
    {id: 14, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"},
    {id: 15, nombre: "Conejito", tipo: "varios", cantidad: 1, desc: "Conejito pequeño", precio: 3500, talle: "unico", img:"../imagenes/imgVarios/conejito.jpeg", marca:"Jony"},
    {id: 16, nombre: "Base de mesa", tipo: "Mueble", cantidad: 1, desc: "Base de apoyo Para mesa, usada algunos detalles. Precio negociable", precio: 3500, talle: "unico", img:"../imagenes/imgVarios/basedelamesa.jpeg", marca:"Pamela"},
    {id: 17, nombre: "Masajeador De Pies", tipo: "Electro", cantidad: 1, desc: "Masajeador para pies Nuevo.", precio: 12000, talle: "unico", img:"../imagenes/imgVarios/masajeadorPiesGama.jpeg", marca:"Belen"},
    {id: 18, nombre: "Mesa Cuadrada", tipo: "Mueble", cantidad: 1, desc: "Mesa cuadrada, viene con base tambien cuadrada. usada, algunos detalles. Precio Negociable", precio: 3500, talle: "unico", img:"../imagenes/imgVarios/mesaFrente.jpeg", marca:"Pamela"},
    {id: 19, nombre: "Parlante Monster", tipo: "Musical", cantidad: 1, desc: "Parlante Monster Nuevo, sin detalles", precio: 45000, talle: "unico", img:"../imagenes/imgVarios/parlanteMonster45000.jpeg", marca:"Adan"},
    {id: 20, nombre: "LLanta De Ford EcoSport", tipo: "Rueda", cantidad: 1, desc: "Llanta de Ford Eco Sport Cantidad 1", precio: 40000, talle: "", img:"../imagenes/imgVarios/llantaCostadoEcoSport-Jony.jpeg", marca:"Goodyear"},


    
    
    
    
]


//{id: 21, nombre: "Armaf Club de Nuit Intense EDT 105ml para hombre", tipo: "Perfume", cantidad: 1, desc: "Armaf Club de Nuit Intense EDT 105ml para hombre", precio: 60000, talle: "", img:"../imagenes/imgVarios/PiletaCostado-Jony.jpeg", marca:"Pelopincho"},
//{id: 22, nombre: "PROBANDO PRODUCTOS DE FCBK CON SUS LINKS DE IMAGENES", tipo: "varios", cantidad: 1, desc: "pRODUCTO KIT DE TUBOS DE FCBK", precio: 15000, talle: "VARIOS", img:"", marca:"Goodyear"}
//  {id: 16, nombre: "Cartel de Neon", tipo: "Cartel", cantidad: 1, desc: "Realizado en Neon, Para Cliente que Cancelo pedido. Nuevo. El precio es con instalacion incluida", precio: 25000, talle: "", img:"../imagenes/imgVarios/cartelModista.jpeg", marca:"Alelux"},
//  {id: 27, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 28, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}
//  {id: 17, nombre: "Rueda Goodyear", tipo: "varios", cantidad: 1, desc: "Rueda Nueva Goodyear Medidas: 195/55R15. cantidad : 1", precio: 60000, talle: "195/55R15", img:"../imagenes/imgVarios/llantaRueda.jpeg", marca:"Goodyear"}

