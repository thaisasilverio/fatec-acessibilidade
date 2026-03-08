let tamanhoFonte = 16

const aumentar = document.getElementById("aumentar")
const diminuir = document.getElementById("diminuir")

aumentar.addEventListener("click", () => {

tamanhoFonte += 2

document.documentElement.style.setProperty(
"--base-font",
tamanhoFonte + "px"
)

})

diminuir.addEventListener("click", () => {

tamanhoFonte -= 2

document.documentElement.style.setProperty(
"--base-font",
tamanhoFonte + "px"
)

})