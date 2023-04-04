function maiorNoFim(str) {
    let arr = str.split(" ");

    let ultima = arr[arr.length - 1];
    let maior = "";
    let indice = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maior.length) {
            maior = arr[i];
            indice = i
        }
    }

    arr[arr.length - 1] = maior;
    arr[indice] = ultima;

    return arr.join(" ");
}


console.log(maiorNoFim("a paralelepipedo palavra maior"));
console.log(maiorNoFim("abc aa aabbcc aabb aac"));
console.log(maiorNoFim("abc ab abba a aabbcc"));
console.log(maiorNoFim("dasdasdasjdlasjdlasjdlasjdlasjdlasjsdasdasdaswwwwd, asljdlasjdlasjdlasjdlasjdlaksdj"))
console.log(maiorNoFim(""));