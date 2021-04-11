//Array normal con indices numericos(ya que no se le indica nada)
let arr1 = ["aaaa","bbbb","cccc","dddd","eeee"];

//Array JSON con indices por String(key:value)
let arr2 = {"aa":"111111","bb":"22222","cc":"33333","dd":"4444"};







//////////////////////////////////////////////////////////////////////
/////////   Listando Array Normal
//////////////////////////////////////////////////////////////////////
let end = arr1.length;

document.write("<h1>Listando Array  normal al derecho</h1><br>");

for (let i=0; i<end ;i++){
    document.write(arr1[i]+"<br>");
}
////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////
document.write("<p></p><h1>Listando Array normal del revés</h1><br>");
let r= arr1.length -1;

for (; r>=0 ;r--){
    document.write(arr1[r]+"<br>");
}
/////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////
/////////   Listando Array JSON
//////////////////////////////////////////////////////////////////////


document.write("<h1>Listando Array JSON </h1><br>");

for (let clave in arr2){

    if(arr2.hasOwnProperty(clave)){
    // Mostrando en pantalla la clave junto a su valor
    document.write("La clave es " + clave+ " y el valor es " + arr2[clave]+"<br>");        
    }

}



////////////////////////////////////////////////////////////////////////



