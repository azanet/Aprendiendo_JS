let a=4;
let b=9;


///////////////////////////////////////////////////////////////////////////
// Funcion autoinvocada, almacenada en una variable
////////////////////////////////////////////////////////////////////////////

//Se ejecutará una función "autoinvocada" y la variable 'c' almacenará el valor retornado
let c= (function (){
    return (a+b);
})();
//Mostrando valor de 'c'
document.write("valor de 'c' tomado de funcion autoinvocada: "+c+"<br>");






///////////////////////////////////////////////////////////////////////////
//  Función normal, y llamada a esta
////////////////////////////////////////////////////////////////////////////

//Creando Funcion NORMAL 

function suma(d,e){
    e= e || 0; //en caso de "e" ser "undefined" tomará el valor '0'
    return (d+e);
}

//Llamamos a la función con un solo parámetro
document.write("Llamando funcion 'suma' SOLO con valor de 'c': "+suma(c)+"<br>");

//Llamamos a la función con sus 2 parámetros
document.write("Llamando funcion 'suma' 2 valores, valor de 'c' y '3': "+suma(c,3)+"</p>");







///////////////////////////////////////////////////////////////////////////
//  Función llamada desde función, con funciones almacenadas en variables, y llamada a esta
///////////////////////////////////////////////////////////////////////////
document.write("<h1>Funcion llamada a traves de funciones almacenadas en variables</h1><br>");

let p1=7;
let p2=5;

//Creamos funcion resta
function resta(){
  //  document.write(p1-p2);
    return p1-p2;
}

//almacenamos la función "resta" en una variable
let function_resta= resta;
//Mostrando valor de la variable para Verificar que la funcion se encuentra dentro
document.write(function_resta);


//Creamos una funcion que acepta Funciones como Parámetros y las EJECUTA
function ejecutar(funcion){
    return funcion();
}

//Por último, creamos una variable, que almacena la ejecución de la función 
//"ejecutar" pasandole como parámetro, la variable "funcion_resta" que contiene la funcion resta 
let resultado= ejecutar(function_resta);

document.write("<br><br>Mostrando variable 'resultado' que contiene el retorno de la ejecución de la funcion 'ejecutar(funcion)':  "+resultado);

