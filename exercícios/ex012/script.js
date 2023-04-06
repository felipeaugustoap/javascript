function clicar(){
    var num = Number(window.prompt('Digite um número: '))
    var res = document.getElementById('resultado')
    var div = num % 2
    if( div == 1) {
        res.innerHTML = `<p>O número ${num} que foi digitado é <strong>ÍMPAR</strong></p>`
    } else {
        res.innerHTML = `<p>O número ${num} que foi digitado é <strong>PAR</strong></p>`
    }
}