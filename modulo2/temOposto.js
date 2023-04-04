function temOposto(lst) {

    for (i = 0; i < lst.length; i++) {
        for (j = i + 1; j < lst.length; j++) {

            if (lst[i] === (lst[j] * -1)) {
                return true;
            }

        }
    }

    return false;

}

console.log(temOposto([2, 4, 5, -2]));
console.log(temOposto([2, 3, 4, 2]));
console.log(temOposto([-3, 1, 3, 8, 4, -8]));