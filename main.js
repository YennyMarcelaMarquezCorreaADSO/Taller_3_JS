addEventListener("DOMContentLoaded", ()=>{
// Ejercicio 1
// En una granja se requiere saber alguna información para determinar el precio de venta por cada kilo de huevo.
// precio se determina a traves del promedio de calidad de las N gallinas que hay en la granja. 
// La calidad de cada gallina se obtiene según la formula:
// calidad = (peso de la gallina * altura de la gallina)/Numero de huevos que pone

let CantGall = 0, c = 0

CantGall = Number(prompt("Ingrese el número de gallinas que hay en la granja: "));

while(c<=CantGall ){
  c = c+1
  let peso = Number(prompt("Ingrese el peso de la gallina [Kg]: "));
  let altura = Number(prompt("Ingrese la altura de la gallina [cm]: "));
  let CanHu = Number(prompt("Ingrese la cantidad de huevos: "));
  
  let Calidad = (peso*altura)/CanHu
  let precio = Calidad/CantGall

 
  console.group(`%cFormula (${peso} * ${altura}) / ${CanHu}`, `backgrounnd: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

  console.log(`El precio de venta por el kilo de huevo de la gallina ${c} es: "${precio}"`);
break

}

})

