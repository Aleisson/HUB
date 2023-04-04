function maiorNoFim(str) {

    

    const array = str.split(' ');
    let maior = array[0];

    for (let i = 1; i < array.length; i++) {

        if (maior.length < array[i].length) {
            maior = array[i];
        }

    }

    const index = array.indexOf(maior);
    
    
    array.push(maior);
    return array.join(" ");


    
}

console.log(maiorNoFim("a paralelepipedo palavra maior"));
console.log(maiorNoFim("abc aa aabbcc aabb aac"));
console.log(maiorNoFim("abc ab abba a aabbcc"));
console.log(maiorNoFim("dasdasdasjdlasjdlasjdlasjdlasjdlasjsdasdasdaswwwwd, asljdlasjdlasjdlasjdlasjdlaksdj"))
console.log(maiorNoFim(""));