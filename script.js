const mensaje = `
Querido Carlos:

Esta Navidad no quería dejar pasar
la oportunidad de escribirte algo especial.
No sé en qué momento te volviste
una de mis sonrisas favoritas,
pero aquí estás… en mis pensamientos.

Tu forma de ser, tu manera de hablar
y esos pequeños detalles
hacen mis días un poco más bonitos.
No es una gran confesión,
solo un mensaje sincero desde el corazón.

Ojalá esta Navidad te regale calma,
momentos felices
y razones para sonreír.
Y si entre todo eso
piensas un poquito en mí,
créeme… yo ya gané. 🎄✨
`;

const musicBtn = document.getElementById("musicBtn");
const musica = document.getElementById("musica");
const texto = document.getElementById("texto");
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const hearts = document.getElementById("hearts");

let i = 0;
let started = false;

sobre.addEventListener("click", () => {
    if (started) return;
    started = true;

    sobre.classList.add("abierto");

    setInterval(crearCorazon, 500);

    setTimeout(() => {
        carta.classList.add("mostrar");
        escribir();
    }, 900);
});

function escribir() {
    if (i < mensaje.length) {
        texto.textContent += mensaje.charAt(i++);
        setTimeout(escribir, 45);
    }
}

function crearCorazon() {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = ["💙","💖","🤍"][Math.floor(Math.random()*3)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = Math.random() * 10 + 14 + "px";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 6000);
}


let reproduciendo = false;

musicBtn.addEventListener("click", () => {
    if (!reproduciendo) {
        musica.play();
        musicBtn.textContent = "🎶 Música reproduciéndose 🎶";
        reproduciendo = true;
    } else {
        musica.pause();
        musicBtn.textContent = "💖 Toca la pantalla para escuchar la música 💖";
        reproduciendo = false;
    }
});
