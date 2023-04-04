function imprimePadrao(numLinhas) {
    let str = "";
    let num = numLinhas;
    for (var i = 1; i <= (numLinhas * 2) - 1; i++) {
        str = "";
        if (i <= numLinhas) {
            for (var j = 1; j <= i; j++) {
                str = str + j + " ";
            }
        } else {
            for (let z = num - 1; z > 0; z--) {
                str = z + " "+ str;
            }
            num--;
        }

        console.log(str);
    }
}

imprimePadrao(5);
console.log("----- ----- ----");
imprimePadrao(8);