let resultado = document.querySelector(".resultado");
let img = document.querySelector("#imagem");

let data = new Date();
let horas = data.getHours();
let minutos = data.getMinutes();

if (horas > 0 && horas <= 12) {
  resultado.textContent = ` Agora são exatamente ${horas}:${minutos} horas.`;
  img.src = "imagens/manha.jpeg";
} else if (horas >= 13 && horas < 18) {
  resultado.textContent = ` Agora são exatamente ${horas}:${minutos} horas.`;
  img.src = "imagens/tarde.webp";
} else {
  resultado.textContent = ` Agora são exatamente ${horas}:${minutos} horas.`;
  img.src = "imagens/noite.webp";
}
