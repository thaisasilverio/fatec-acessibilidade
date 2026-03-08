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

const botao = document.getElementById("botao-tema")

botao.addEventListener("click", () => {

document.body.classList.toggle("tema-escuro")
document.body.classList.toggle("tema-claro")

if(document.body.classList.contains("tema-escuro")){
botao.textContent = "☀️ Tema Claro"
}

else{
botao.textContent = "🌙 Tema Escuro"
}

})