function calcular(){
    var nasc = Number(window.prompt('Digite o ano em que você nasceu:'))
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - nasc
    var res = document.querySelector('section#resultado')
    res.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}