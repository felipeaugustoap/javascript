
function descubra(){
    let mes = window.prompt('Digite o mês em extenso (ex: Outubro)')
    let res = document.querySelector('section#resultado')

    let estacao
    switch (mes.toUpperCase()){
        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
            estacao = 'PRIMAVERA'
            break
        case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO':
            estacao = 'VERÃO'
            break
        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estacao = 'OUTONO'
            break
        case 'JUNHO': case 'JULHO': case 'AGOSTO':
            estacao = 'INVERNO'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    

    res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <strong><mark>${estacao}</mark></strong>.</p>`
}
