function figurinhasFaltantes(n, lst) {

    const album = Array.from(Array(n).keys(), (x) => x + 1);
    return album.filter(x => !lst.includes(x));

}

console.log(figurinhasFaltantes(5, [3, 3, 2, 3, 3, 3] ));