// não altere esta função
function ET(lst) {
    let i = 0;
    while (i < lst.length) {
        if (lst.indexOf(lst[i]) !== i) {
            lst.splice(i, 1);
        }
        else {
            i++;
        }
    }

    return lst;
}

console.log(ET([1,2,3,4,4]));