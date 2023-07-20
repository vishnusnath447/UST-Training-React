const checkOddOrEven = function oddOrEven(n){
    if(n%2==0){
        return 'even';
    }
    else{
        return 'odd';
    }
}

const checkOddEvenArray = function oddOrEvenArray(a){
    let b=[];
    for(let n of a){
        b.push(checkOddOrEven(n));
    }
    return b;
}

const checkOddEvenArrayMap = (a)=>{
    return a.map(
        (x)=>{
            return checkOddOrEven(x);
        }
    )
}

console.log(checkOddEvenArrayMap([1,2,3,4,5,6,7]));
console.table(checkOddEvenArray([0,1,2,3,4,5,6,7]));