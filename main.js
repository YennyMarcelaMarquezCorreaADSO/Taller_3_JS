addEventListener("DOMContentLoaded", ()=>{
// Ejercicio 2
// Hacer un algoritmo que al ingresar 2 números por la pantalla y se calcule la suma, resta, multiplicación
// y división. El proceso debe terminar cuando se hallan realizado 10 procesos (Hacer uso de
// contadores)

let c = 0
let num = 0

while(num <= 9){
  c = c+1

  let numero1 = Number(prompt("Ingrese el primer número: "))
  let numero2 = Number(prompt("Ingrese el segundo número: "))

  let suma = numero1 + numero2
  let resta = numero1 - numero2
  let multipliación = numero1 * numero2
  let division = numero1 / numero2

  num=num + 1


  console.log (`proceso número "${c}"`);
  

  console.log(`Suma: "${suma}"`);

// ------------------------------------------------------


  console.log(`Resta: "${resta}"`);

// ------------------------------------------------------

  console.log(`Multiplicación: "${multipliación}"`);

// -----------------------------------------------------

  console.log(`División: "${division}"`);

  console.log(`______________________`)

}

})

