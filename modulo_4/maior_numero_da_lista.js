// não altere esta função
function maiorNumero(outerList) {
    let maior = -Infinity;
    for (let i = 0; i < outerList.length; i++) {
        for (let j = 0; j < outerList[i].length; j++) {
            if (outerList[i][j] > maior) {
                maior = outerList[i][j];
            }
        }
    }
    return maior;
}

// não altere esta função
function maiorNumeroV2(outerList) {
    let maiorListaInterna = -1;
    for (let i = 0; i < outerList.length; i++) {
        if (maiorListaInterna === -1 || outerList[i].length > outerList[maiorListaInterna].length) {
            maiorListaInterna = i;
        }
    }

    let maior = -Infinity;
    for (let j = 0; j < outerList[maiorListaInterna].length; j++) {
        if (outerList[maiorListaInterna][j] > maior) {
            maior = outerList[maiorListaInterna][j];
        }
    }

    return maior;
}

function responder() {
    return 0; // por exemplo: 
    // se você acha que somente as afirmativas 
    // 1 e 4 do enunciado estão corretas, retorne 5
}
1+