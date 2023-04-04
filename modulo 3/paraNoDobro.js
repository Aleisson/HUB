function paraNoDobro(lst) {

    if (!lst[0] || lst.lenght) {
        return 0;
    }

    let soma = 0;

    for (let i = 0; i < lst.length; i++) {

        if (i * 2 === lst[i]) {
            return soma;
        }

        soma += lst[i];
    }

    return soma;
}


console.log(paraNoDobro([0, 5, 6, 7]));
console.log(paraNoDobro([]));
console.log(paraNoDobro([1, 2, 3, 5]));
console.log(paraNoDobro([9, 0, 1, 3, 7, 10, 9, 8]));
console.log(paraNoDobro([10, 20, 30, 40]));
