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