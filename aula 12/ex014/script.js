
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`
    if (hora > 0 && hora <12) {
        //Bom dia
        img.src = 'media/manhã300.png'
        document.body.style.backgroundColor = '#feaf78'
    } else if( hora > 12 && hora <= 18) {
        //boa tarde
        img.src = 'media/tarde250.png'
        document.body.style.backgroundColor = '#d26a1a'
    } else {
        // boa noite
        img.src = 'media/noite300.png'
        document.body.style.backgroundColor = '#1d333e'
    }
}