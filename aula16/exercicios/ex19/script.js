let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#resultado')

let valores = [] // valores inseridos na lista

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){ //para verificar se o valor segue os parametros de 1 a 100 e se não está na inLista, ou seja, ao buscar o valor no array, o valor não é encontrado.
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('O valor é inexistente ou já foi adiocionado a lista.')
    }
    num.value = '' // ao digitar o numero o valor zera
    num.focus() // e o foco vai ao campo para adicionar o numero sem clicar
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adiciona valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos] // para somar as posições de valores
            if (valores[pos] > maior )
            maior = valores[pos] // se o indice da array for maior que o valor a let maior, o valor que lhe será asignado será o da pos dentro do array
            if (valores[pos] < menor)
            menor = valores[pos]
        }

        let media = soma / tot
        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }   
}
