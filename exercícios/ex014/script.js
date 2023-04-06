function clicar(){
    var data = new Date()
    var res = document.getElementById('resultado')
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${data}</mark>.</p>`
}