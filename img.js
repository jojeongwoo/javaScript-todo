const body = document.querySelector('body');

function paintNumber(number) {
    const image = new Image();
    image.src = `./img/${number}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function genRandom() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    paintNumber(randomNumber);    
}

function init() {
    const number = genRandom();
    paintNumber(number);
}

init();