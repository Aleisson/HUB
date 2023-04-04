function produtorioColuna(x, mat) {


    if (!mat[0][x]) {
        return null;
    }

    let produto = 1;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {

            if (x === j) {
                produto *= mat[i][j];
            }

        }

    }
    return produto;
}

console.log(produtorioColuna(1, [[2, 3], [2, 3]]));
console.log(produtorioColuna(2, [[2, 3], [2, 3]]));
console.log(produtorioColuna(0, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
