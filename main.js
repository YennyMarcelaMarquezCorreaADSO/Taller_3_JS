addEventListener("DOMContentLoaded", ()=>{
// Ejercicio 3
// Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de
// computación.

let c = 0

while(c <= 5){

  let nombre = (prompt("Ingrese su nombre: "))
  let apellido = (prompt("Ingrese su apellido: "))
  let edad = Number(prompt("Ingrese su edad: "))
  let notapro = Number(prompt("Ingrese la nota "))

  c+=1

  console.log(`Nombre: "${nombre}"`);

// ------------------------------------------------------


  console.log(`Apellido: "${apellido}"`);

// ------------------------------------------------------

  console.log(`Edad: "${edad}"`);

// -----------------------------------------------------

  console.log(`Nota promedio: "${notapro}"`);

  console.log(`______________________`)

}

})

