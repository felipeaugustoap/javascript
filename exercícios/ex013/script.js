function clicar(){
    var n1 = Number(window.prompt('Digite um número: '))
    var n2 = Number(window.prompt('Digite outro número:'))
    var res = document.querySelector('section#resultado')
    if (n1 > n2) {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong>.</p>`
    } else {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong>.</p>`
    }
}