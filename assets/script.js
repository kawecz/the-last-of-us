function clickmenu() {
    if(itens.style.display == 'none') {
        itens.style.display = 'block'
    } else {
        itens.style.display ='none'
    }
}

function tamanho() {
    if(window.innerWidth >= 990) {
        itens.style.display = 'block'
        burguer.style.display = 'none'
    } else {
        itens.style.display = 'none'
        burguer = 'block'
    }
}