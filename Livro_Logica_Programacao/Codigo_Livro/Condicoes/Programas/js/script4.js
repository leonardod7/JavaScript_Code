// Vamos criar referência com o form e elementos de resposta

const form = document.querySelector("form")
const resp = document.querySelector("h3")


// Vamos criar um ouvinte de evento, acionando quando o botão submit (Calcular peso ideal) for clicado
// O objetivo ao clicarmos no botão Calcular Peso ideal é dele retornar a resposta para a tag h3, como forma de texto.
form.addEventListener("submit", (e)=> {
    e.preventDefault() // evita o envio do form
    const nome = form.inNome.value // obtém o valor do id inNome do form
    const masculino = form.inMasculino.checked // Essa propriedade verifica se o campo está ou não selecionado, retorna true ou false
    const altura = Number(form.inAltura.value) // obtém o valor
    let peso // declara a variável peso
    if (masculino == true) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    // apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
    })


// Vamos criar um ouvinte de evento, acionando quando o botão submit (Limpar Campos) for clicado
// O objetivo ao clicarmos no botão limpar campos é de apagar todo o conteúdo dentro da tag h3
form.addEventListener("reset", ()=> {
    resp.innerText = "" // limpa o conteúdo do elemento h3 que exibe a resposta
})












// TODO: Nesse programa utilizamos pela primeira vez a declaração de uma variável com let no lugar de const. Como a variável peso
// está dentro do if, ela só existe dentro desse bloco. E como precisamos dela fora do if, é necessário primeiro declarar a variável
// que após a declaração terá o seu conteúdo alterado dentro do if e utilizado no contexto do programa principal.
// TODO: O seguinte trecho de código também poderia ser utilizado netste programa:
// if (masculino == true) {
//         const peso = 22 * Math.pow(altura, 2)
//         resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
//     } else {
//         const peso = 21 * Math.pow(altura, 2)
//         resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
//     }
// Como o programa executa apenas os comandos que estão dentro do if ou do else, poderíamos utilizar o const. Contudo, observe
// que a saída que apresenta a variável peso precisaria estar repetida, dentro de cada condição (o que não é muito adequado).
// Fora do contexto do bloco, essa variável não existe.
// TODO: Nosso formulário HTML contém uma tag <input type='reset'>. O clique nesse botão limpa o conteúdo dos campos do formulário,
// mas não limpa o espaço onde é exibida a resposta do programa. Para fazer isso, acrescentamos um ouvinte para o evento reset do form
// e atribua um ""(vazio) para a propriedade innerText do elemento h3.
