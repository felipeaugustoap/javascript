function gerar(){
    var min = 1
    var max = 100
    var dif = max - min
    var aleatorio = Math.random()
    var numero = min + Math.trunc(dif * aleatorio)
    
    var res = document.getElementById('resultado')
    res.innerHTML += `<p>Acabei de pensar no número <mark> ${numero}</mark>.</p>`
}

function limpar(){
    var res = document.getElementById('resultado')
    res.innerHTML = null
    res.innerHTML = '<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.</p>'
    
}