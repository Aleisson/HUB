function verificaRepetidos(lst) {

    for (let i = 0; i < lst.length; i++) {
        for (let j = i + 1; j < lst.length; j++) {
            if (lst[i] === lst[j]) {
                return true
            }
        }

    }
    return false;
}

console.log(verificaRepetidos([1, 2, 3, 2, 5, 6]));
console.log(verificaRepetidos([1, 2, 3, 4, 5, 6] ));
console.log(verificaRepetidos());
console.log(verificaRepetidos());