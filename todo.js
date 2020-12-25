const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const LIST = 'list';
let toDos = [];

function loadList() {
    const loadList = localStorage.getItem(LIST);

    if(loadList !== null) {
        const parseToDos = JSON.parse(loadList);
        parseToDos.forEach((toDo) => paintList(toDo.text));
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const value = toDoInput.value;
    paintList(value);
    toDoInput.value = '';
}

function paintList(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');

    const newID = toDos.length + 1;

    delBtn.addEventListener('click', deleteButton);
    delBtn.innerText = '❌';
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;

    toDoList.appendChild(li);

    const toDoObj = {
        text:text,
        id:newID
    };

    toDos.push(toDoObj);
    saveList();
}

function saveList() {
    localStorage.setItem(LIST, JSON.stringify(toDos));
}

function deleteButton(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(toDo => {return toDo.id !== parseInt(li.id);});

    toDos = cleanToDos;
    saveList();
}

function init() {
    loadList();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();