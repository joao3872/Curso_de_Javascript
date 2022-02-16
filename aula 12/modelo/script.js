function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var des = document.getElementById('descricao')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        des.innerHTML = 'Bom Dia !'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        des.innerHTML = 'Boa Tarde !'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagens/noite.png'
        des.innerHTML = 'Boa Noite !'
        document.body.style.background = '#515154'
    }
}
