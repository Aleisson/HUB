function formarPar(arr) {
    let pares = [];
    for (let i = 0; i < arr.length; i++) {

        let lote = arr[i];
        let par = 0;

        for (let j = 0; j < lote.length; j++) {
            let numero = lote[j].split(' ')[0]
            let pe = lote[j].split(' ')[1]
            let procuraPar;
            if (pe === 'D') {
                procuraPar = `${numero} E`;
            } else {
                procuraPar = `${numero} D`;
            }

            for (let z = j + 1; z < lote.length; z++) {
                if (lote[z] === procuraPar) {
                    par++;
                    lote[z] = '';
                    break;
                }
            }

            pares[i] = par;

        }
    }
    return pares;
}


console.log(formarPar([['40 D', '41 E', '41 D', '40 E'], ['38 E', '38 E', '40 D', '38 D', '40 D', '37 E']]))