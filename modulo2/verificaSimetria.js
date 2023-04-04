function verificaSimetria(mat) {


    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {

            if (Math.abs(mat[i][j] - mat[j][i])) {
                return false;
            }

        }

    }

    return true;

}

console.log(verificaSimetria([[1, 2], [2, 1]]));
console.log(verificaSimetria([[2, 1], [2, 1]]));
console.log(verificaSimetria([[1, 4, 7, 5], [4, 2, 9, 5], [7, 9, 3, 6], [5, 5, 6, 4]]));