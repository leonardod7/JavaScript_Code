// Vamos criar as referências ao form, h3 e h4
const formulario = document.querySelector("form")
const resp_h3 = document.querySelector("h3")
const resph4 = document.querySelector("h4")

// Vamos crar um ouvinte de evento

formulario.addEventListener("submit", (e) => {
    const titulo = formulario.inTitulo.value // obtém o conteúdo do campo
    const duracao = Number(formulario.inDuracao.value) // obtem o conteúdo do campo, em formato numérico
    const horas = Math.floor(duracao/60) // arredonda para baixo o resultado
    const minutos = duracao % 60 // obtém o resto da divisão

    resp_h3.innerText = titulo // exibe resposta
    resph4.innerText = `${horas} hora(s) e ${minutos} minuto(s)` // exibe resposta
    e.preventDefault() // evita envio do form

})