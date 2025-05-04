const textElement = document.querySelector('h2');
const botoes = document.querySelector('.botoes');
const fotoContainer = document.querySelector("#fotoContainer");

const text = "Essa sou eu:";
let index = 0;
let isDeleting = false;

function typeWriter() {
    if (!isDeleting && index <= text.length) {
        textElement.textContent = text.substring(0, index);
        index++;
        setTimeout(typeWriter, 80);
    }
}
typeWriter();