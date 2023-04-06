
let res = document.querySelector('section#resultado')
let comutador = 0
let jogador = 0

function sortear(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif*aleatorio)

}


function jogar(){

    let jogador = Number(window.prompt('Qual é o seu palpite?'))
    
    if (computador == jogador) {
        
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    } else if (computador >= jogador){
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    }
}