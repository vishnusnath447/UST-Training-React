const shortestWord=(arr)=>{
    return arr.reduce((element1,element2)=>element1.length<=element2.length?element1:element2)
}

console.log(shortestWord(['hello', 'world', 'this', 'is', 'a', 'test']));
console.log(shortestWord(['hello', 'world', 'this', 'is', 'test', 'of', 'the', 'shortest', 'word']));