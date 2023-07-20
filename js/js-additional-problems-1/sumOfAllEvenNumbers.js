const sumOfAllEvenNumbers = (arr)=>{
    return arr.filter(element =>element%2==0).reduce((sum,element)=>sum+element);
}

console.log(sumOfAllEvenNumbers([1, 2, 3, 4, 5]));
console.log(sumOfAllEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));