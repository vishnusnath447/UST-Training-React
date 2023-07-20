const existsHigherNumber = (arr,num)=>{
    arr.sort();
    for(let i=0;i<arr.length;i++){
        if(num<=arr[i]){
            return true;
        }
    }
    return false;
}
// console.log(existsHigherNumber([4,1,2,7,3,4],1));
console.log(existsHigherNumber([1, 2, 3, 4, 5], 3));
console.log(existsHigherNumber([1, 2, 3, 4, 5], 6));