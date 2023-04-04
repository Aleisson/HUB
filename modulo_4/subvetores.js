function subvetores(vetor, passo, tamanho) {

    const newVetor = [];
    let inicial = 0;
    let subArray = [];
    while (inicial < vetor.length) {
        subArray = [...vetor].splice(inicial, tamanho);
        if (subArray.length === tamanho) {
            newVetor.push(subArray);
        }
        inicial += passo;
    }

    return newVetor;
}

console.log(subvetores([1, 2, 3, 4, 5], 2, 3));
console.log(subvetores([1, 2, 3, 4, 5], 2, 2));
console.log(subvetores([1, 2, 3, 4, 5], 1, 1));
