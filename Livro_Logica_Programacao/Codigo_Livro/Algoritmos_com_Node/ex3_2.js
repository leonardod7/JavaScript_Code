const prompt = require("prompt-sync")() // adiciona pacote ao programa
const veículo = prompt("Veículo: ")
const preco = Number(prompt("Preço R$: "))
const perc_entrada = 0.5
const entrada = preco * perc_entrada
const parcela = (1-perc_entrada) * preco
console.log(`Promoção: ${veículo}`)
console.log(`Entrada de: ${entrada.toFixed(2)}`)
console.log(`+ 12x de: ${parcela.toFixed(2)}`)
