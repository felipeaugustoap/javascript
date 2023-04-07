function contar(){
    let nInicio = document.getElementById('inicio')
    let nFim = document.getElementById('fim')
    let nPasso = document.getElementById('passo')
    let res = document.querySelector('div#resultado')
    if (nInicio.value.length == 0 || nFim.value.length == 0 || nPasso.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(nInicio.value)
        let f = Number(nFim.value)
        let p = Number(nPasso.value)
        if (p <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1!')
            p = 1
        } 
        let c = i
        if ( i <= f ){
            while(c <= f ){//Contagem Crescente
                res.innerHTML += ` ${c} &#x1F449;`
                c += p
            }
        } else {
            while(c >= f ){//Contagem Decrescente
                res.innerHTML += ` ${c} &#x1F449;`
                c -= p
            }
        }
        /*if ( i <= f ){ 
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} &#x1F449;`
            }
        } else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} &#x1F449;`
            }
        }  */
        res.innerHTML += `&#x1F3C1;`
    }
    }
