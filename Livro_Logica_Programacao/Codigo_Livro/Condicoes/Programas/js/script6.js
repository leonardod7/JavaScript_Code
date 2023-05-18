// Vamos criar referência com o form e elementos de resposta

const form = document.querySelector("form")
const resp = document.querySelector("h3")


// Vamos criar um ouvinte de evento, acionando quando o botão submit (Calcular peso ideal) for clicado
// O objetivo ao clicarmos no botão Calcular Peso ideal é dele retornar a resposta para a tag h3, como forma de texto.
form.addEventListener("submit", (e)=> {
    e.preventDefault() // evita o envio do form

    // obtém e converte o conteúdo do campo inHoraBrasil
    const numero = Number(form.inNumero.value) // obtém o valor
    const raiz = Math.sqrt(numero) // calcula a raiz quadrada
    if (Number.isInteger(raiz)) {
        resp.innerText = `Raiz: ${raiz}`
    } else {
        resp.innerText = `não há raiz exata para ${raiz}`
    }
    })