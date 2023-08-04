// Nota promedio
// a) Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
// considerando que realiza tres exámenes, de los cuales el primero y el
// segundo tienen una ponderación de 25%, mientras que el tercero de 50%.

let exam1 = prompt("ingrese nota de examen 1");
let exam2 = prompt("ingrese nota examen 2");
let exam3 = prompt("ingrese nota examen 3");

let note1 = parseFloat (exam1* 0.25);
let note2 = parseFloat (exam2* 0.25);
let note3 = parseFloat (exam3* 0.50);

let average = (note1+note2+note3)

alert("your average is: " + average)