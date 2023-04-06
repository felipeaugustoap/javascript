function media(){
    var nome = window.prompt('Qual o nome do aluno?')
    var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
    var n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    var res = document.querySelector('section#resultado')
    var media = (n1 + n2) / 2
    
    res.innerHTML = `<p> Calculando a média final de <mark> ${nome}</mark>.</p>`
    res.innerHTML += `<p> As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.</p>`
    res.innerHTML += `<p> A média final será <mark>${media}</mark>.</p>`
    if(media < 6) {
        res.innerHTML += `A mensagem que temos é: <strong style = 'color: red;'>Estude um pouco mais!</strong>`
    } else {
        res.innerHTML += `A mensagem que temos é: <strong style = 'color: red;'>Meus parabéns!</strong>`
    }
}