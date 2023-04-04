function somaProdutorioInterno(arr) {
    
    let soma = 0;
    let produto = 1;

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i].length){
            for (let j = 0; j < arr[i].length; j++) {
                produto*=arr[i][j];
                
            }
            soma += produto;
            produto = 1;
        }

    }   
    return soma;
}

console.log(somaProdutorioInterno([[5], [12, 3, 0], [2, 3, 5]]));
console.log(somaProdutorioInterno([[], [4, 5], [6]]));
console.log(somaProdutorioInterno([[]]));