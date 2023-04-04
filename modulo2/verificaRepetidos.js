function verificaRepetidos(lst){

    const array = [];

    for(i = 0; i < lst.length; i++){
        for(j = i+1; j < lst.length; j++){

            if(array.includes(lst[i])){
                continue;
            }

            if(lst[i] === lst[j]){
                array.push(lst[i]);
            }

        }
    }

    return array;
}


console.log(verificaRepetidos([1, 2, 3, 1, 2, 3, 4, 5]))
console.log(verificaRepetidos([1,1,1,1]));
console.log(verificaRepetidos([1,2,3,4]));
console.log(verificaRepetidos([]))

