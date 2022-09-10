

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