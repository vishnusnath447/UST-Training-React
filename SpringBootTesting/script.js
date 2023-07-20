const parentDiv = document.querySelector(".parent-div");
const button = document.querySelector("button");
const name =document.getElementById("text");
const age = document.getElementById("age");
const url = "http://localhost:8080/trainees";
const putUrl = "http://localhost:8080/trainee"

const createElement=(element)=>{
    const h2 = document.createElement('h2');
    const span = document.createElement('span');
    h2.innerHTML = element.name+" : ";
    span.innerHTML = element.age;
    h2.appendChild(span);
    
    return h2;
}

const onStart = async ()=>{
    const response = await fetch(url);
    let data = await response.json();
    data.forEach(element => {
        parentDiv.appendChild(createElement(element));
    });
}

onStart();
// button.addEventListener('click',async(event)=>{
//     event.preventDefault();
//     // const response = await fetch(putUrl,{method:"POST"},body:JSON.stringify({name:text.innerHTML,age:age.innerHTML}));
//     const response = await fetch(putUrl, {
//         method: "PUT",
//         body: JSON.stringify({name:text.innerHTML,age:age.innerHTML}),
//       });
//     // console.log(response);
    
// })
// document.addEventListener('DOMContentLoaded',onStart);