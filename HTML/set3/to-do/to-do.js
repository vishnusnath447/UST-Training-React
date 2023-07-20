const inputRef = document.getElementById('input');
const toDOListRef = document.getElementById('to-do-list');
const forms = document.getElementById('forms');

const createToDo = (input)=>{
    const toDoItem=document.createElement('div');
    const inputItem = document.createElement('input');
    const label = document.createElement('label');

    label.innerText = input;
    inputItem.type = 'checkbox';

    inputItem.addEventListener('change',(event)=>{
        event.target.parentNode.remove();
    })

    toDoItem.appendChild(inputItem);
    toDoItem.appendChild(label);

    toDoItem.classList.add('to-do-item');
    return toDoItem;
}

const addToList = (event) => {
    event.preventDefault();
    toDOListRef.appendChild(createToDo(input.value));
    inputRef.value='';
};

forms.addEventListener('submit',addToList);