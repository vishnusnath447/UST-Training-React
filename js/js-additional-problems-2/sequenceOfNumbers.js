const sequenceOfNumber=(num)=>{
    const arr = [];
    while(num!=1){
        arr.push(num);
        if(num%2===0){
            num = num/2;
        }
        else{
            num = (num*3)+1;
        }
    }
    arr.push(num);
    return arr;
}

console.log(sequenceOfNumber(22));