
const container = document.getElementById("container");
// const btnCrear = document.getElementById("btn__crear");

var appSypsy = {};
const menualtokee = datos =>{
    console.log(datos);
    appSypsy.menualtokee=datos;
    var cards = "";
    let contador = 0;
    appSypsy.menualtokee.map(menualtokee => {
        contador++;
        cards+=`<div class="card caja__${contador}">
        <img src="${menualtokee.imagen}" alt="" srcset="">
        </div>
        `;
        // for(let propiedad of Object.keys(menualtokee)){
        //     cards+="<li>"+propiedad+" : "+menualtokee[propiedad]+"</li>";
        // }

    })
    document.getElementById("container").innerHTML = cards;
}



// const container = document.getElementById("container");
// const btnCrear = document.getElementById("btn__crear");
// let contador = 0;
// btnCrear.addEventListener('click', ()=> {
    // contador++;
    // container.innerHTML+=`<div class="card caja__${contador}"><h2><b>Caja ${contador}</b></h2></div>
    // `;
// })

// var app = {};
// var miCallback = datos =>{
    // console.log(datos);

// desde aqui

//     app.objetohermanos=datos;
//     var html = "";
//     html+="<h2>Datos de Hermanos</h2>"
//     html+="<hr/>";
//     app.objetohermanos.map(objetohermanos => {
//         html+="<h3><b>"+objetohermanos.nombre+" : "+objetohermanos.edad+"</b></h3>";
//         html+="<img class='card' src='"+objetohermanos.imagen+"'></img>";
//         for(let propiedad of Object.keys(objetohermanos)){
//             html+="<li>"+propiedad+": "+objetohermanos[propiedad]+"</li>";
//         }
//         html+="<hr/>"

//     })
//     document.getElementById("resultados").innerHTML = html
// }







// COPIAR ESTA FUNCION PERO MEJOR

// var miCallback = datos =>{
//     console.log(datos);
//     app.objetohermanos=datos;
//     var html = "";
//     html+="<h2>Datos de Hermanos</h2>"
//     html+="<hr/>";
//     app.objetohermanos.map(objetohermanos => {
//         html+="<h3><b>"+objetohermanos.nombre+" : "+objetohermanos.edad+"</b></h3>";
//         html+="<img class='card' src='"+objetohermanos.imagen+"'></img>";
//         for(let propiedad of Object.keys(objetohermanos)){
//             html+="<li>"+propiedad+": "+objetohermanos[propiedad]+"</li>";
//         }
//         html+="<hr/>"

//     })


//     document.getElementById("resultados").innerHTML = html
// }