/*
Ejemplo de como se crean objetos en JS utilizando funciones
  Crearemos un objeto Persona con controlará las variables sin definir 
  y según esté vacia o no, mostrará una salida u otra a la hora de solicitar la informacionCompleta
*/


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

//Creando OBJETO PERSONA, con todos sus parametros
let pepe= new Persona("Pepe","delCampo","234234");
document.write(pepe.informacionCompleta());
document.write(pepe.nombreCompleto);


//Creando OBJETO PERSONA, con SOLO nombre 
let paco= new Persona("paco",null,null);
document.write(paco.informacionCompleta());
document.write(paco.nombreCompleto);


//Creando OBJETO PERSONA, con todos sus parametros
let pimientito= new Persona("Pimientito",null,"4365465");
document.write(pimientito.informacionCompleta());
document.write(pimientito.nombreCompleto);
