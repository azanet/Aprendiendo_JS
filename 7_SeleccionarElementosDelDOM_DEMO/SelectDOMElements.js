
////////////Trabajando con los elementos por ID ////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//OBTENIENDO el "array" de elementos que contienen el "ID" indicado
let divsId= document.getElementById("Ppal");

//mostrando elementos
console.log(divsId); 



//AGREGANDO clase a los elementos obtenidos anteriormente
divsId.classList.add("agregando_clase");

//mostrando elementos para verificar modificacion
console.log(divsId); 



//ELIMINANDO clase a los elementos obtenidos anteriormente
divsId.classList.remove("agregando_clase");

//mostrando elementos para verificar modificacion
console.log(divsId); 




/////////////////////////////////////////////////////////////////////////
////////////Trabajando con los elementos por CLASS //////////////////////
/////////////////////////////////////////////////////////////////////////

//OBTENIENDO el "array" de elementos que contienen la "CLASS" indicada
let divs= document.getElementsByClassName("class_test");

//mostrando elementos
console.log(divs); 

//Listaremos cada elemento que exista en el Array
for (let i=(divs.length-1);i>=0;i--){
    console.log(divs[i]); 
   
}



/////////////////////////////////////////////////////////////////////////
////////////Trabajando con los elementos por TAG //////////////////////
/////////////////////////////////////////////////////////////////////////

//OBTENIENDO el "array" de elementos que contienen el "TAG" indicado
let tags= document.getElementsByTagName("div");

//mostrando elementos
console.log(tags); 

//Listaremos cada elemento que exista en el Array
for (let i=(tags.length-1);i>=0;i--){
    console.log(tags[i]); 
   
}



///////////////// MANEJANDO "querySelector" //////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//Para devolver al PRIMERO que ENCUENTRE (filtrando por CLASS) 
let queryClass = document.querySelector(".class_Ppal");
console.log(queryClass);

//Para devolver al PRIMERO que ENCUENTRE (filtrando por ID) 
let queryId = document.querySelector("#Ppal");
console.log(queryId);


//Para devolver TODOS los que ENCUENTRE (filtrando por CLASS) 
let queryClassAll = document.querySelectorAll(".class_Ppal");
console.log(queryClassAll);

//Para devolver TODOS los que ENCUENTRE (filtrando por ID) 
let queryIdAll = document.querySelectorAll("#test1");
console.log(queryIdAll);


/////// CREANDO NUESTRO PROPIO "Jquery" (para buscar elementos del Dom)

function $(selector){
    return document.querySelector(selector);
}

function $(selectorAll){
    return document.querySelectorAll(selectorAll);
}

//Usando nuestro "Jquery"
let mi_Jquery = $(".class_test"); //devuelve uno

console.log(mi_Jquery);


let mi_JqueryAll = $(".class_test");//Devuelve todos
console.log(mi_JqueryAll);





        
