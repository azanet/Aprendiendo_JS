
let number = 0;
let str="ñaña";
let objJson = {};
let objArr = [];

//Mostrando funcionamiento de 'typeof'
document.write(typeof number +"<br>");
document.write(typeof str +"<br>");
document.write(typeof objJson +"<br>");
document.write(typeof objArr +"<br>");
document.write("<br><br><br>");


//declarando variables para siguientes ejemplos
let aux_null = null; //variable nula
let aux_undefined; //Variable sin definir
let aux_empty = ""; //Variable vacia
let rellena= "soy la variable Rellena";

//comparando las distintas variables con 'null' y 'undefined' utilizando 'typeof'


/*UNDEFINED es una variable GLOBAL del lenguaje y es de SOLO LECTURA
  Este valor se devuelve cuando la 'Variable a utilizar' NO ESTÁ DEFINIDA.
*/


//Metiendo comprobaciones en un FUNCION que será llamada más abajo
function checkVar (str){
    if (typeof str == "undefined"){

        document.write("Variable sin definir");  
    
    }
    else if (typeof str == null){

        document.write("Variable NULA(VACIA sin valor)");

    }else{

        document.write("el valor de la variable es:"+ str);
    }
    document.write("<br><br><br>");
}


//Llamando a la función, pasandole las distintas variables
checkVar(aux_null);
checkVar(aux_undefined);
checkVar(aux_empty);
checkVar(rellena);

let num = prompt("intruduca num1");
let num2 = prompt("intruduca num2");

function sum(a,b){

document.write(Number(a)+Number(b));

}

sum(num,num2);


