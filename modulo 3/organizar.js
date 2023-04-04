function organizar(items) {

    let subArray = [];
    const resultArray = [];
    let cont = 0;
    items.sort((a, b) => a - b);
    const fixLength = items.length;
    for (let i = 0; i < fixLength; i++) {

        if (cont > 1) {

            items.reverse();
            subArray.push(items[0]);
            items.shift();
            items.reverse();
            cont = 0;
            resultArray.push(subArray);
            subArray = [];
            continue;
        }
        subArray.push(items[0]);
        console.log(items[0]);
        items.shift()
        cont++;

    }
    if (subArray.length) {
        resultArray.push(subArray)
    }

    return resultArray;
}

console.log(organizar([10, 1, 2, 1, 8, 8, 10, 5]))