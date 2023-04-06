function analise(){
    var meses = new Array('Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez')
    var semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    var dsem = data.getDay()

    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    
    var res = document.getElementById('resultado')
    res.innerHTML = `<p>Dia: <mark>${dia}</mark>.</p>`
    res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark>.</p>`
    res.innerHTML += `<p>Ano: <mark>${ano}</mark>.</p>`
    res.innerHTML += `<p>Dia da semana: <mark>${semana[dsem]}</mark>.</p>`
    res.innerHTML += `<p>Hora: <mark>${hora}</mark>.</p>`
    res.innerHTML += `<p>Minutos: <mark>${min}</mark>.</p>`
    res.innerHTML += `<p>Segundos: <mark>${seg}</mark>.</p>`
}