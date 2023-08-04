// Pinturería
// Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de
// pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir
// generando presupuestos para cada cliente.

let cantidaddemetros= prompt("Ingrese la cantidad de metros")
let preciopormetro=5000
let preciototal=0

preciototal= parseFloat(cantidaddemetros)* preciopormetro
alert("El precio total a pagar es "+ preciototal)
