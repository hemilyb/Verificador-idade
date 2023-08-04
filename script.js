function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'homem'
            if (idade >= 0 && idade <= 2) {
                //bebê
                img.setAttribute('src', 'imagens/bebe-h.png')
                document.body.style.background = '#687abd'
            } else if (idade <= 10) {
                //criança
                img.setAttribute('src', 'imagens/criancah.png')
                document.body.style.background = '#52d8b4'     
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemh.png')
                document.body.style.background = '#26256b'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
                document.body.style.background = '#2327c6'
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
                document.body.style.background = '#52834b'
            }
        } else if (fsex[1].checked) {
            gen = 'mulher'
            if (idade >= 0 && idade <= 2) {
                //bebê
                img.setAttribute('src', 'imagens/bebe-m.png') //src = source da imagem = fonte
                document.body.style.background = '#d67fd1'
            } else if (idade <= 10) {
                //criança
                img.setAttribute('src', 'imagens/criancaw.png')
                document.body.style.background = '#52d8b4'
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemw.png')
                document.body.style.background = '#26256b'
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'imagens/adulta.png')
                document.body.style.background = '#975b9b'
            } else {
                //idosa
                img.setAttribute('src', 'imagens/idosa.png')
                document.body.style.background = '#52834b'
            }
        }
        
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img) //appendChield: "adicionar um elemento(img)"
    }
}