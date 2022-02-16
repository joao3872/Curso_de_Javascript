function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
                img.style.width = '200px'
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
                img.style.width = '200px'
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
                img.style.width = '200px'
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
                img.style.width = '200px'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
                img.style.width = '200px'
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
                img.style.width = '200px'
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
                img.style.width = '200px'
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
                img.style.width = '200px'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
