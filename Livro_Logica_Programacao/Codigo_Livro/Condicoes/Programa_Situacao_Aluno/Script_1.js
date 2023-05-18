// Vamos criar referência com o form e elementos de resposta

const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// Vamos criar um ouvinte de evento, acionando quando o botão submit for clicado

form.addEventListener("submit", (e)=> {
    e.preventDefault() // evita o envio do form
    const nome = form.inNome.value // obtém o valor do id inNome do form
    const nota1 = Number(form.inNota1.value) // obtém o valor da nota 1
    const nota2 = Number(form.inNota2.value) // obtém o valor da nota 2
    const media = (nota1 + nota2) / 2
    resp1.innerText = `Média das Notas ${media.toFixed(2)}` // Vamos retornar para o elemento h3, o resultado das médias
    // Vamos criar condições para dizer se ele foi arovado ou não
    if (media >=7) {
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado!` // retorna para o elemento h4 que o aluno foi aprovado
        resp2.style.color = "blue" // atribui uma cor
    } else if (media >=4) {
        resp2.innerText = `Atenção ${nome}! Você está em exame` // retorna para o elemento h4 que o aluno está em exame
        resp2.style.color = 'green'
    }
    else {
        resp2.innerText = `Ops ${nome}! Você foi reprovado(a)` // retorna
        resp2.style.color = 'red'
    }
})
