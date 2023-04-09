let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('resultado')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //window.alert('TUDO OK')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }


    
}
/*
res.innerHTML += `<p>Ao todo, temos ${n1.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${}</p>`
    res.innerHTML += ` <p>Somando todos os valores, temos ${}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${}</p>`*/