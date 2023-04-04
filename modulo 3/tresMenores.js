function tresMenores(lst) {

    function trocaMenor(arr, indice1, indice2) {

        let aux = arr[indice1];
        arr[indice1] = arr[indice2];
        arr[indice2] = aux;

    }


    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < lst.length; j++) {

            if (lst[j] < lst[i]) {
                trocaMenor(lst, i, j);
            }

        }

    }

    return lst.slice(0, 3);


}


console.log(tresMenores([3, 2, 5, 6, 2, 3, 4, 1]))
console.log(tresMenores([115, 105, 106, 3, 109, 115]))
console.log(tresMenores([1, 1, 1, 1, 2, 2, 3, 3]))
