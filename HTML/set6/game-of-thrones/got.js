let url = 'https://thronesapi.com/api/v2/Characters';
const fullName = document.getElementById('name'); 
const title = document.getElementById('title');
const family = document.getElementById('family');
const image = document.getElementById('image');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

let length = 0;
let count = 0;

const initLength = async ()=>{
    let response = await fetch(url);
    if(response.status===200){
        let data = await response.json();
        length = data.length;
    }
}

const fetchDetails = async (id)=>{
    let response = await fetch(url+`/${id}`);
    if(response.status===200){
        let data = await response.json();
        image.src = data.imageUrl;
        fullName.innerHTML=data.fullName;
        title.innerHTML=data.title;
        family.innerHTML=data.family;
    }
}

initLength();

fetchDetails(0);

rightButton.addEventListener('click',(event)=>{
    if(count===length-1){
        count = -1;
    }
    count++;
    fetchDetails(count);
});

leftButton.addEventListener('click',(event)=>{
    if(count===0){
        count = length;
    }
    count--;
    fetchDetails(count);
});

document.addEventListener('DOMContentLoaded',(event)=>{
    fetchDetails(0);
})