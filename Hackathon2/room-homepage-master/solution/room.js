const upperImage = document.getElementById('upper-img');
const ltButton = document.querySelector('.left-slider button');
const rtButton = document.querySelector('.right-slider button');
const upperRightHeading = document.getElementById('upper-right-heading');
const upperRightContent = document.getElementById('upper-right-content');

const upperImageArray = ['/images/desktop-image-hero-1.jpg','/images/desktop-image-hero-2.jpg','/images/desktop-image-hero-3.jpg'];
const upperRightHeadingArray = ['Discover innovative ways to decorate',
    'We are available all across the globe','Manufactured with the best materials'];
const upperRightContentArray = [`We provide unmatched quality, comfort, and style for property owners across the country. 
Our experts combine form and function in bringing your vision to life. Create a room in your 
own style with our collection and make your property a reflection of you and what you love.`,`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
store locator. Any questions? Don't hesitate to contact us today.`,`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
to ensure that every product is made as perfect and as consistent as possible. With three decades of 
experience in this industry, we understand what customers want for their home and office.`];


let arrayCount = 0;

const update = (index)=>{
    upperImage.src = upperImageArray[index];
    upperRightHeading.innerHTML = upperRightHeadingArray[index];
    upperRightContent.innerHTML = upperRightContentArray[index];
}

const changeRt = () => {
    if(arrayCount === 2){
        arrayCount = -1;
    }
    arrayCount++;
    update(arrayCount);
}

const changeLt = () => {
    if(arrayCount === 0){
        arrayCount = 3;
    }
    arrayCount--;
    update(arrayCount);
}

rtButton.addEventListener('click',changeRt);
ltButton.addEventListener('click',changeLt);