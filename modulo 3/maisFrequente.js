function maisFrequente(lst) {

    if (!lst.length) return 0;
    lst.sort((a, b) => a - b);

    let contA = 0;
    let contB = 0;
    let element = lst[0];
    let elementRep = lst[0];
    for (let i = 0; i < lst.length; i++) {

        if (lst[i] !== element) {
            element = lst[i];
            contA = 0;
        }
        contA++;
        if (contA >= contB) {
            contB = contA;
            elementRep = lst[i];
        }
    }

    return elementRep;

}

console.log(maisFrequente([20, 80, 80, 10, 20]));
console.log(maisFrequente([20, 25, 85, 40, 25, 90, 25, 40, 55, 40]));
console.log(maisFrequente([10, 10, 10, 40, 40, 5, 5, 5]));

