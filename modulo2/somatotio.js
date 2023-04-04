function somatorio(arr) {

    let somaNumero = 0;
    let somaArray = 0;
    for (let i = 0; i < arr.length; i++) {

        if (Number.isInteger(arr[i])) {

            somaNumero += arr[i];

            continue;
        }
        if (arr[i].length) {
            for (let j = 0; j < arr[i].length; j++) {

                if (!(arr[i][j] % 2)) {
                    somaArray += arr[i][j];
                }

            }
        }
    }

    return somaNumero + somaArray;
}

console.log(somatorio([[2, 3, 4], 4, 3, [3, 3, 3], [2, 3, 3]]))