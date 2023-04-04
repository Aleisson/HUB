function acumulaPares(lst) {

    const array = [];
    let soma = 0;

    for (i = 0; i < lst.length; i++) {
        for (j = 0; j < lst.length; j++) {

            if (array.includes(lst[i])) {
                continue;
            }

            if (i === j) {
                continue;
            }

            if (lst[i] === lst[j]) {
                array.push(lst[i]);
            }

        }
    }

    let contRep = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < lst.length; j++) {


            //console.log("array: " + array[i])
            //console.log("lst: " + lst[j])
            if (array[i] === lst[j]) {

                contRep++;
                //console.log("contRep " + contRep)
            }
        }
        if (contRep > 2) {
            array.shift()
        }

        contRep = 0;
    }

    array.forEach(e => soma= soma + (e*2));
    return soma;
    //reduce
}

console.log(acumulaPares([1, 2, 2, 3, 4, 4, 5]));
console.log(acumulaPares([1, 2, 3, 4, 5]));
console.log(acumulaPares([1, 1, 1, 1, 1]));
console.log(acumulaPares([5, 5, 5, 3, 3, 5, 5, 5]));