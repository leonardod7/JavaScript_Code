// 1) Exercício: Elaborar um programa que leiao salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe
// um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final


const prompt = require("prompt-sync")() // adiciona pacote ao programa
const salario = Number(prompt("Digite o Salário R$: "))
const tempo = Number(prompt("Digite o seu tempo de trabalho: "))
const quadrienio = Math.floor(tempo / 4)
const taxa = 0.01
const salario_total = salario * ((1+ taxa)**quadrienio)
console.log(`O Salário total foi de R$: ${salario_total}`)

