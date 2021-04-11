let num_uno= prompt("input num");
let num_dos= prompt("input num");


if (Number(num_uno) < Number(num_dos)){
  document.write("'num_dos': "+num_dos +" es mayor que 'num_uno': "+num_uno); 
  
}else if (Number(num_uno) === Number(num_dos)){
  document.write("'num_uno': "+num_uno+" es IGUAL que 'num_dos': "+num_dos);   

}else{
  document.write("'num_uno': "+num_uno+" es mayor que 'num_dos': "+num_dos);   
}

