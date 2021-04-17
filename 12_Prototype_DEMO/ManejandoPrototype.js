/*
Manejando PROTOTYPE, agregando funciones a un prototipo, etc
*/

///OBJETO PERSONA 
function Persona(nombre,apellido,dni){

    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;

    //Podemos controlar la salida que queremos que retorne una funcion según con qué parametros se ha creado el objeto

    this.informacionCompleta=function(){
        if ((this.nombre!= null) && (this.apellido!=null) && (this.dni != null)) {
            return ("<br>Todo COMPLETO: "+this.nombre+" "+this.apellido+" "+this.dni);    

        }else{

            if ((this.nombre != null) && (this.apellido != null)) {
                return ("<br>Nombre y Apellido: "+this.nombre+" "+this.apellido);    

            }else if ((this.nombre != null) && (this.dni != null)) {
                return ("<br>Nombre y DNI: "+this.nombre+" "+this.dni);  

            }else if ((this.apellido != null) && (this.dni != null)) {
                return ("<br>Apellido y DNI: "+this.apellido+" "+this.dni);  

            }else{
                return ("Faltan campos son necesario al menos 2");
            }
        }
    }

    //Podemos hacer que tenga distintas propiedades segun con qué parametros se ha creado el objeto
    if (apellido != null ) {
        this.nombreCompleto="<br>"+nombre+" "+apellido+"<br><br>---------------------------------------------------------------------------------<br>";
    }else{
        this.nombreCompleto="<br>Esta propiedad no ha podido ser definida, ya que el apellido o nombre son nulos<br><br>---------------------------------------------------------------------------------<br>";
    }
}//Fin del "clase" PERSONA

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


//##  Creando OBJETO PERSONA "PEPE"##  //
let pepe= new Persona("Pepe","delCampo","234234");

//##  Creando OBJETO PERSONA "PACO"##  //
let paco= new Persona("paco","perez","43545567");


//Usando el parametro __proto__ podremos saber "cual el prototipo de este OBJETO", SOLO FUNCIONA EN CHROME
//  document.write(pepe.prototype); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Podemos agregarle parametros y funciones a un objeto después de crearlo. las cuales SOLO "ESTE MISMO" tendría ///////////////

//Agregamos la propiedad edad a "pepe", la seteamos y la llamamos
pepe.edad=56;
document.write("Edad de 'pepe': "+pepe.edad); //imprimirá la edad correctamente

document.write("<br><br>");

////con "paco" intentaremos llamar a la propiedad "edad"(que fue la que agregamos en "pepe", para demostrar que no es accesible desde "paco")
 document.write("Edad de 'paco': "+paco.edad);//nos undicará "undefined" ya que no hemos seteado esta propiedad para "paco"

 document.write("<br><br>");


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// ESTABLECIENDO nuevas propiedades AL OBJETO PERSONA USANDO "PROTOTYPE", lo cual dotará de todas estas nuevas propiuedades A CUALQUIE OBJETO "Persona"

Persona.prototype.Saludo= "Hola  como estas?";

document.write(pepe.Saludo); //pepe tiene saludo
document.write("<br><br>");

document.write(paco.Saludo);//paco tambien tiene saludo
