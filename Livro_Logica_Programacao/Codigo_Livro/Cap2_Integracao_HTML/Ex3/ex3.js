// Vamos criar as referências ao form, h3 (duas vezes e h4
const formulario = document.querySelector('form')
const retorno2 = document.querySelector('h3')
const retorno3 = document.querySelector('h3')
const retorno4 = document.querySelector('h4')

formulario.addEventListener("submit", (e) => {
    const preco = Number(formulario.inPreco.value) // acessando o valor do input
    const entrada = 0.5 * preco
    const parcelamento = (preco - entrada)/12
    const nomeVeiculo = formulario.inModelo.value // acessando o nome do veículo
    retorno2.innerText = `Promoção: ${nomeVeiculo}`
    retorno3.innerText = `Entrada de: ${entrada.toFixed(2)}`
    retorno4.innerText = `em 12x de ${parcelamento.toFixed(2)}`
    e.preventDefault()

} )