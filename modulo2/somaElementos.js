function somaElementos(arr){
    let soma = 0;
    arr.forEach(
        elem => elem.forEach(
            n => soma+=n
        )
    )
    return soma;
}

console.log(somaElementos([ [1, 2], [3, 2, 4], [1, 2], [3] ] ));

// function somaElementos(mat){
//     let total = 0;
//     for (let i = 0; i < mat.length; i++)
//       for (let j = 0; j < mat[i].length; j++){
//         total += mat[i][j]
//       }
//     return total;
//   }