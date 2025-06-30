const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")
const the_cast_btn = document.querySelector("#the-cast-btn")
const contentmain = document.querySelector("#contentmain")
const cast = document.querySelector("#cast")


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

the_cast_btn.addEventListener("click", () => {
    contentmain.classList.toggle("the-cast-act")
    cast.classList.toggle("cast-act")
})