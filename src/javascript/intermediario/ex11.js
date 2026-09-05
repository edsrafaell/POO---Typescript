const readline = require("readline-sync");
let lado1 = Number(readline.question("Lado 1:"));
let lado2 = Number(readline.question("Lado 2:"));
let lado3 = Number(readline.question("Lado 3:"));

if (lado1 + lado2 <= lado3 || lado2 + lado3 <= lado1 || lado1 + lado3 <= lado2) {
    console.log("Não é um triangulo!");
} else {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log("TRIANGULO EQUILATERO!");
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log("TRIANGULO ISOCELES!");
    } else if(lado1 != lado2 && lado2 != lado3){
        console.log("TRIANGULO ESCALENO!");
    }
}