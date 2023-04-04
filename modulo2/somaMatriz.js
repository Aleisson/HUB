function somaMatriz(mat) {

    let soma = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {

            soma += mat[i][j];

        }

    }

    return soma;

}


console.log(somaMatriz([[1,2],[3,4]]));