function somaDiagonais(mat) {

    if(mat.length !== mat[0].length){
        return 0;
    }

    let soma = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {

            if (i === j || (i + j === mat.length - 1)) {
                //console.log(mat[i][j]);
                soma += mat[i][j];
            }



        }

    }

    return soma;
}

console.log(somaDiagonais([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

console.log(somaDiagonais([[1,2]]));
console.log(somaDiagonais([[1]]));