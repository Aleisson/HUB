function listaCompras(lista, precos, total) {

    let soma = 0;
    const compras = [];

    

    for (let i = 0; i < lista.length; i++) {
        
        soma += precos[i];
        console.log(soma);
        if (soma <= total) {
            compras.push(lista[i]);
        }

    }

    return compras;
}

console.log(listaCompras(
    ['detergente', 'sal', 'macarrao', 'pao'],
    [0.0000001, 0.00001, 4.257, 12.454],
    10
));

// console.log(listaCompras(
//     ['detergente', 'sal', 'macarrao', 'pao', 'bolacha', 'alface'],
//     [7, 3, 1, 7, 4, 8],
//     57
// ));

// console.log(listaCompras(
//     ['macarrao', 'sabonete', 'bolacha', 'pao','macarrao', 'sabonete', 'bolacha', 'pao','macarrao', 'sabonete', 'bolacha'],
//     [4,7,5,6,7,3,4,1,8,2,9],
//     105
// ));