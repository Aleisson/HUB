function paraNoDobro(lst) {
    if (lst.length === 0) return 0;
    let i = 0;
    let soma = 0;
    while ((i*2 !== lst[i]) && (i < lst.length)) {
        soma += lst[i];
        i++;
    }
    soma += lst[i];
    if (i === lst.length) return 0;
    return soma;
}

console.log(paraNoDobro(  [0, 5, 6, 7] ));

console.log(paraNoDobro( [] ));

console.log(paraNoDobro( [1, 2, 3, 5] ));

console.log(paraNoDobro([9, 0, 1, 3, 7, 10, 9, 8]));

console.log(paraNoDobro( [8, 3, 3, 6, 31, 100, 67] ));