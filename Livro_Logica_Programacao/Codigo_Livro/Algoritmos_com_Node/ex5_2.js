// Elaborar um programa para uma veterínária onde leia o peso de uma ração em kg e quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá
// durar a ração

const prompt = require("prompt-sync")() // adiciona pacote ao programa. Permite a entrada de dados via prompt de comandos
const peso = Number(prompt("Informe o peso em kg da ração:"))
const racao_gramas = peso * 1000
const consumo = Number(prompt("Informe o consumo em gramas por dia: "))
const dias = Math.floor(racao_gramas / consumo)
const sobra = racao_gramas % consumo
console.log(`Duração: ${dias} dias`)
console.log(`Sobra: ${sobra} gramas`)

