function maiorNoFim(str) {

    if (!str) {
        return "";
    }
    
    let array = str.split(" ");
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
     
        if(maior.length <  array[i].length){
            maior = array[i];
        }
        
    }

    let ultima = array[array.length - 1];
    console.log(maior)
    array[array.indexOf(maior)] = ultima;
    array[array.length - 1] = maior;
    
    return array.join(" ");
    
}

console.log(maiorNoFim("a paralelepipedo palavra maior"));
console.log(maiorNoFim("abc aa aabbcc aabb aac"));
console.log(maiorNoFim(""));
