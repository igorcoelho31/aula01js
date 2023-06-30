import { calculadora } from "./calculadora.js";

const calc = new calculadora(5,10);


console.log("A soma é: " + calc.soma())
console.log("A subtração é: " + calc.subtracao())
console.log("A divisão é: " + calc.divisao())
console.log("A multiplicação é: " + calc.multiplicacao())