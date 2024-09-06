const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () => nav.classList.toggle("active"))


function tamanho() {
    if(window.innerWidth > 990) {
        itens.style.display = 'block'
        burguer.style.display = 'none'
    } else {
        itens.style.display = 'none'
        burguer = 'block'
    }
}

function cast() {
    if(contentmain.style.display == 'none') {
        contentmain.style.display = 'block'
    } else {
        contentmain.style.display ='none'
    }
}