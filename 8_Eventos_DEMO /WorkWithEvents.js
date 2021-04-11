//Utilizando Listeners
                                             //EventoAescuchar    
document.getElementById("test1").addEventListener("click",clic,false);
                                                       //funcionArealizar   //Este ultimo-
//      -parametro define en que orden Se ejecutarán los eventos en caso de estar anidados "¿fase de buubling? y captura"

//Coon esta config, primero se ejecutará el evento del BOTON y luego el del DIV
document.getElementById("test2").addEventListener("mouseover",mouseOut,false);
document.getElementById("test3").addEventListener("mouseover",mouseOver,true);



///FORMA FEA- NO SE UTILIZA

function clic(){
    alert("Pulsaste el botón");
}


function mouseOver(){
    alert("azuul");
}


 function mouseOut(){
    alert("Rojoo");
}       
