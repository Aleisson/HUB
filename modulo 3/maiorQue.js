function maiorQue(x, lst) {

    let arr = [];

    for (let i = 0; i < lst.length; i++) {

        if (x <= lst[i]) {
            arr.push(lst[i]);
        }

    }

    return arr;
}

console.log(maiorQue(15, [10, 16, 9, 15, 2, 20]));
console.log(maiorQue(0, [5, 4, -2, 4, 2, -6, 3]));
console.log(maiorQue(30, [3, 4, 2, 5, 23, 5]));