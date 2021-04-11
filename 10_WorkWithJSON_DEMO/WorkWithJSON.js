//JSON Javascript Object Notation
//Se utilizan para crear OBJETOS
// y trabajan 'similar' a los Diccionarios de Java (Clave:Valor)



// 1)
//////////////////////////////////////////////////////////////////////
//Al definir un JSON, las "KEY" podemos definirlas con o sin comillas.

let jKeySinComillas = {
    a:"1111",
    b:"2222",
    c:"33333",
    d:"4444"
};



let jKeyConComillas = {"e":"5555","f":"6666","g":"7777","h":"8888"};


//Listando los dos Arrays de OBJETOS
for (let keyS in jKeySinComillas){

    document.write(jKeySinComillas[keyS]+"<br>");
}

document.write("</p>");
for (let key in jKeyConComillas){

    document.write(jKeyConComillas[key]+"<br>");
}
document.write("</p>");






////////////////////////////////////////////////////////////////////////
// 2)
//////////////////////////////////////////////////////////////////////

//Creando un OBJETO, con atributos y funciones que utilizan sus atributos
let objPersona= {
    nombre:"Pepito",
    apellidos:"Grillo",
    edad:68,
    nombre_completo: function (){return (this.nombre+" "+this.apellidos)},
    verif_mayorEdad: function(){
        if(this.edad>=18){return "Es mayor de edad."}else{return "No es mayor de edad";}

    }
};





document.write("Nombre completo: "+objPersona.nombre_completo );
document.write("</p>");
document.write("Es mayor de edad?: "+objPersona.verif_mayorEdad() );

