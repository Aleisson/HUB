function search(list, target) {

    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        const elem = list[middle];

        if (target === elem) {
            return true;
        }
        if (target < elem) {
            right = middle - 1;
        }
        if (target > elem) {
            left = middle + 1
        }
    }

    return false;


}

console.log(search([1, 2, 3, 4, 5, 7, 8], 80));