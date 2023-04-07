
function contar() {
    
    let res = document.getElementById('resultado')

    res.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`

    /*let c = 10
    while (c <= 10 && c >= 0) {
        res.innerHTML += ` ${c} &#x1F449;`
        c --
    }   
    res.innerHTML += `&#x1F3C1;`*/

    for (let c = 10; c <= 10  && c > 0; c--) {
        res.innerHTML += ` ${c} &#x1F449;`
    }
    res.innerHTML += ` &#x1F3C1;`
}