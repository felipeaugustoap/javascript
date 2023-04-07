function contar(){
    let n1 = Number(document.getElementById('valorInicial').value)
    let n2 = Number(document.querySelector('input#valorFinal').value)
    let res = document.getElementById('resultado')
    res.innerHTML += `<h2>Contando de ${n1} até ${n2}</h2>`
    if (n1 <= n2){ 
    while (n1 <= n2){
        res.innerHTML += ` ${n1} &#x1F449;`
        n1 ++
    }
    } else {
        while (n1 >= n2) {
        res.innerHTML += ` ${n1} &#x1F449;`
        n1 --
    }
    }
    res.innerHTML += ` &#x1F3C1;`
}


