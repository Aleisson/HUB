function procuraDobrado(lst) {

    for (i = 0; i < lst.length; i++) {
        for (j = 0; j < lst.length; j++) {
            if(lst[i] === 0){
                continue;
            }

            if ((lst[i] * 2) === lst[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(procuraDobrado([3, 2, 1]));
console.log(procuraDobrado([5, 2, 6, 8, 4]));
console.log(procuraDobrado([5, 7, 11]))
console.log(procuraDobrado([]));
console.log(procuraDobrado([0, 2]));