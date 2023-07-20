/* <li class="list-group-item list-group-item-action d-flex justify-content-between">
    <span>Item 1</span>
    <button class="btn btn-danger">
        <i class="bi bi-trash3"></i>
    </button>
</li> */

const btnAdd = document.getElementById('add');
const input = document.getElementById('input');
const ul = document.getElementById('ul');

let list = [];

const createItem = (textValue)=>{
    const li = document.createElement('li');
    li.classList.add('list-group-item','list-group-item-action','d-flex','justify-content-between','px-5');
    const span = document.createElement('span');
    span.innerHTML = textValue;
    const button = document.createElement('button');

    button.addEventListener('click',(event)=>{
        event.target.parentNode.remove();
        const value = event.target.parentNode.querySelector('span').innerHTML;
        list = list.filter(item=>item!=value);
        localStorage.setItem('todos',JSON.stringify(list));
    })

    button.classList.add('btn','btn-danger');
    const i = document.createElement('i');
    i.classList.add('bi','bi-trash3');
    i.style.pointerEvents='none';
    button.appendChild(i);
    li.appendChild(span);
    li.appendChild(button);
    return li;
}

const addItem = (event)=>{
    
    const textValue = input.value;
    ul.appendChild(createItem(textValue));
    list.push(textValue);
    input.value = '';
    localStorage.setItem('todos',JSON.stringify(list));
}


document.addEventListener('DOMContentLoaded',(event)=>{
    list = JSON.parse(localStorage.getItem('todos')||[]);
    list.forEach((item)=>{ul.appendChild(createItem(item))});
})
btnAdd.addEventListener('click',addItem);