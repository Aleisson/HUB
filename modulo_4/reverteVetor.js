// não altere esta função
function reverteMaria(vec) {
    const resposta = [];

    for (let i = vec.length - 1; i >= 0; i--) {
        resposta.push(vec[i]);
    }

    return resposta;
}

// não altere esta função
function reverteAna(vec) {
    const resposta = [];

    for (let i = 0; i < vec.length; i++) {
        resposta.unshift(vec[i]);
    }

    return resposta;
}

// altere o return desta função
function responder() {
    return 0; // por exemplo: 
    // se você acha que somente as afirmativas 
    // 1 e 4 do enunciado estão corretas, retorne 5
}