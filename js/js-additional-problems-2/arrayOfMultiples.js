const arrayOfMultiples = (num,length)=>{
    const arr = [];
    for(let i=1;i<=length;i++){
        arr.push(num*i);
    }
    return arr;
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));