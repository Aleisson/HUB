// não altere esta função
function diferencaDeduplicada(lst1, lst2) {
    lst1 = lst1.filter((x, i) => lst1.indexOf(x) === i); // $1

    lst2 = lst2.filter((x, i) => lst2.indexOf(x) === i);

    return lst1.reduce((prev, curr) => curr > prev ? curr : prev, -Infinity) -
        lst2.reduce((prev, curr) => curr > prev ? curr : prev, -Infinity);
}

// altere o return desta função
function responder() {
    return 0; // por exemplo: 
    // se você acha que somente as afirmativas 
    // 1 e 4 do enunciado estão corretas, retorne 5
}