function subindoNoQuadroDeLideres(placarLideres, placarJogador) {
    console.log(placarLideres);
    console.log(placarJogador);
    let primeiro = 0;
    let meioLista = 0;
    cont = 0;
    let ultimo = placarLideres.length - 1;
    let achou = false;
    while (primeiro <= ultimo && !achou) {
        meioLista = Math.ceil((primeiro + ultimo) / 2);
        cont++;
        console.log(cont);
        if (placarLideres[meioLista] >= placarJogador) {
            achou = true;
        } else {
            if (placarJogador < placarLideres[meioLista]) {
                ultimo = meioLista - 1;
            } else {
                primeiro = meioLista + 1;
            }
        }
    }

    return placarLideres[meioLista];

}


console.log(
    subindoNoQuadroDeLideres(Array.from(Array(100).keys(), (x) => x**3),
        Math.floor(Math.random() * 100))
);