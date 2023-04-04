function ordenaNumeros(numeros) {

    function trocaMenor(numeros, indice1, indice2) {
        
        let aux = numeros[indice1];
        numeros[indice1] = numeros[indice2];
        numeros[indice2] = aux;

    }


    for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) {

            if (numeros[j] < numeros[i]) {
                trocaMenor(numeros, i, j);
            }


        }

    }

    return numeros;

}

console.log(ordenaNumeros([10, 2, 1, 5]))
console.log(ordenaNumeros([1, 5, 4]))
console.log(ordenaNumeros([]))