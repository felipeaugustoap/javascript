function contar(){
let num = Number(document.getElementById('valorFinal').value)
let res = document.querySelector('section#resultado')
res.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
/*for (let n1 = 0; n1 <= num; n1 ++ ) {
res.innerHTML += ` ${n1} &#x1F449;`
}
res.innerHTML += `&#x1F3C1;`*/

let n1 = 0
while (n1 <= num) {
    res.innerHTML += ` ${n1} &#x1F449;`
    n1 ++
}
res.innerHTML += ` &#x1F3C1;`

}


