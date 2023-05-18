const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados. Precisamos desse comando sempre que usarmos o terminal para visualizar as saídas
const num1 = Number(prompt("Digite o seu primeiro número:")) // lê o número
const num2 = Number(prompt("Digite o seu segundo número:")) // lê o número
const soma = num1 + num2 
console.log(`A soma é ${soma}`) // Exibe o resultado