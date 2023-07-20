const randomRGBColor = ()=>{
    return `rgb(${Math.floor(Math.random()*256)},
    ${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

const rgbColor = (event)=>{
    document.body.style.backgroundColor = randomRGBColor();
    rgbButton.style.backgroundColor = randomRGBColor();
    rgbButton.style.color=randomRGBColor();
}

const randomHexColor = ()=>{
    let list = '0123456789abcdef';
    let color = '#';
    for(let i=0; i<6; i++){
        color = color + list[Math.floor(Math.random()*list.length)];
    }
    return color;
}

const hexColor = (event)=>{
    document.body.style.backgroundColor = randomHexColor();
    hexButton.style.backgroundColor=randomHexColor();
    hexButton.style.color=randomHexColor();
}

const rgbButton = document.getElementById('rgb');
const hexButton = document.getElementById('hex');

document.addEventListener('DOMContentLoaded',(event)=>{
    rgbColor();
    hexColor();
    
});

rgbButton.addEventListener('click',rgbColor);
hexButton.addEventListener('click',hexColor);