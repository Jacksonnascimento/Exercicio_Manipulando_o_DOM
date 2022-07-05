function SalvarCasa(){
    let area = document.querySelector("input[name='area']").value
    let bairro = document.querySelector("input[name='bairro']").value
    let cidade = document.querySelector("input[name='cidade']").value
    let numero = document.querySelector("input[name='numero']").value

    let novaListaValor = document.createElement("li")
    novaListaValor.innerText = area + "m², numero " + numero + ", bairro " + bairro + ", cidade " + cidade + " "

    let botaRemover = document.createElement("button")
    botaRemover.type = "button"
    botaRemover.innerText = "Remover"
    botaRemover.setAttribute("onclick", "removerCasa(this)")

    novaListaValor.appendChild(botaRemover)

    document.getElementById("lista-casa").appendChild(novaListaValor)

}

function removerCasa(botao) {
    let liRemover = botao.parentNode
    document.getElementById("lista-casa").removeChild(liRemover)

}