// Cheque
// a) Una empresa desea determinar el monto de un cheque que debe
// proporcionar a uno de sus empleados que tendrá que viajar durante un
// determinado número de días. Los gastos que cubre la empresa son: hotel,
// comida y 200 pesos diarios para otros gastos. El monto debe estar
// desglosado para cada concepto. Realiza un algoritmo que determine el
// monto del cheque.


let daysoftravel = prompt("ingrese el numero de días que va a viajar")
let eat = 50
let hotel = 50
let otrosgastos = 200  

let checkamount =  (eat+hotel+otrosgastos)*parseFloat(daysoftravel)

alert ("el monto del cheque es : " + checkamount)