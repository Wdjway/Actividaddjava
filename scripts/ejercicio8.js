// Ahorros
// 8) Realiza un algoritmo para determinar cuánto dinero ahorra una persona en
// un año si considera que cada semana ahorra 15% de su sueldo (considera
// cuatro semanas por mes y que no cambia el sueldo).


let sueldo = prompt("cuanto es su sueldo mensual")
let ahorro =parseFloat((sueldo) / 4 )* 0.15

alert("El ahorro anual es de: " + ahorro)