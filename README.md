Sujestão
Criar Botão, A+ e A-, de aumentar e diminuir o texto.

HTML
No Nav:
      <div class="tools">
        <button class="font-btn" id="aumentar">A+</button>
        <button class="font-btn" id="diminuir">A-</button>
      </div>

CSS

/* BOTÕES A+ A- */

.font-btn{
padding:6px 10px;
border-radius:8px;
border:1px solid var(--border);
background:rgba(17,24,39,.7);
color:var(--text);
cursor:pointer;
font-weight:bold;
transition:0.2s;
}

.font-btn:hover{
border-color:rgba(255,255,255,.3);
transform:scale(1.05);
}

JavaScript

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
