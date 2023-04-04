// não altere esta função
function figurinhasFaltantes(n, lst) {
    const faltantes = [];

    for (let i = 1; i <= n; i++) {
        let temos = false;
        for (let j = 0; j < lst.length; j++) {
            if (lst[j] === i) {
                temos = true;
                break;
            }
        }

        if (!temos) {
            faltantes.push(i);
        }
    }

    return faltantes;
}

// altere o return desta função
function responder() {
    return 0; // por exemplo: 
    // se você acha que somente as afirmativas 
    // 1 e 4 do enunciado estão corretas, retorne 5
}