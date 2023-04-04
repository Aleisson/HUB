function repeatElement(arr){

    const dict = {};

    for (let i = 0; i < arr.length; i++) {
        

        if (dict[arr[i]] !== undefined) {
            dict[arr[i]] = i
        } else {
            dict[arr[i]] = false
        }

        
        
    }

    return arr.filter((e, i)=> dict[e] === i);
}

console.log(repeatElement([1, 2 , 4, 4, 5, 6, 6]));