function contar(){
    let num = Number(document.getElementById('numero').value)
    let res = document.getElementById('resultado')
    res.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
        res.innerHTML += `${num} x ${c} = <strong>${num*c}</strong> <br>`
    }
}