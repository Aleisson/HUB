function somaTotal(lst){
    let soma = 0;
    lst.forEach(element => {
       element.forEach( e => soma += e); 
    });
    return soma;
}

console.log(somaTotal([[1, 2, 3],[12, -20], [ ], [8, 4]]));

console.log(somaTotal([[],[], [], []]))