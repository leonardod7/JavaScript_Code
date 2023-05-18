// Vamos criar referência com o form e elementos de resposta

const form = document.querySelector("form")
const resp = document.querySelector("h3")


// Vamos criar um ouvinte de evento, acionando quando o botão submit (Calcular peso ideal) for clicado
// O objetivo ao clicarmos no botão Calcular Peso ideal é dele retornar a resposta para a tag h3, como forma de texto.
form.addEventListener("submit", (e)=> {
    e.preventDefault() // evita o envio do form

    // obtém e converte o conteúdo do campo inHoraBrasil
    const horaBrasil = Number(form.inHoraBrasil.value) // obtém o valor
    let horaFranca = horaBrasil + 5 // calcula hora na frança
    if (horaFranca > 24) { // se passar das 24 horas na frança
        horaFranca = horaFranca - 24
    }
    // exibe resposta
    resp.innerText = `A hora na França é ${horaFranca.toFixed(2)}`
    })