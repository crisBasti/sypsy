var app = {};
let container = document.getElementById("container");

// var menualtokee = datos =>{
//     app.menualtokee=datos;
//     var tarjetas = "";
//     app.menualtokee.map(menualtokee =>{
//     let contador=0;
//         tarjetas+=`
//             <div class="col caja__${contador++}" id="">
//                       <div class="card">
//                         <img src="${menualtokee.imagen}" alt="${menualtokee.name}">
//                         <div class="card-body">
//                           <h5 class="card-title"><b>${menualtokee.nombre}</b></h5>
//                           <ul>
//                             <li>${app.menualtokee.ingrediente}</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>`
//         }
//     )
//     document.getElementById("container").innerHTML = tarjetas;

// }

var miCallback = datos =>{
    console.log(datos);
    app.objetohermanos=datos;
    var html = "";
    html+="<h2>Datos de Hermanos</h2>";
    html+="<hr/>";
    app.objetohermanos.map(objetohermanos => {
        html+="<h3><b>"+objetohermanos.nombre+" : "+objetohermanos.edad+"</b></h3>";
        html+="<img class='card' src='"+objetohermanos.imagen+"'></img>";
        for(let propiedad of Object.keys(objetohermanos)){
            html+="<li>"+propiedad+": "+objetohermanos[propiedad]+"</li>";
        }
        html+="<hr/>"

    })
    document.getElementById("container").innerHTML = html
}