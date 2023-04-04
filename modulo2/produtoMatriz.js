function produtoMatriz(mat) {

    let soma = 0;
    let produto = 1;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {

            produto *= mat[i][j];

        }

        soma += produto;
        produto = 1;

    }

    return soma;
}

console.log(produtoMatriz([[1, 2], [3, 4]]));
console.log(produtoMatriz([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(produtoMatriz([[1]]))