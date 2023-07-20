const shuffleNames = (string)=>{
    return string.split(' ').reverse().join(" ");
}

console.log(shuffleNames('Donald Trump'));
console.log(shuffleNames(`Rosie O'Donnell`));