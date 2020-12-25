const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greetings = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING = 'showing';

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser == null) {
        askForName();
    } else {
        paintGreetings(currentUser);
    }
}

function askForName() {
    form.classList.add(SHOWING);
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    const value = input.value;
    paintGreetings(value);
    saveGreetings(value);
}

function paintGreetings(text) {
    form.classList.remove(SHOWING);
    greetings.classList.add(SHOWING);
    greetings.innerText = `Hello ${text}`;
}

function saveGreetings(text) {
    localStorage.setItem(USER_LS, text);
}

function init() {
    loadName();
}

init();