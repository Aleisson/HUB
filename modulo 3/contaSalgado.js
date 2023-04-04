function contaSalgado(arr) {

    let coxinha = 0;
    let risolios = 0;
    let pastel = 0;


    for (let i = 1; i < arr.length; i++) {

        if (arr[i] === 'T') {
            return [coxinha, risolios, pastel]
        }

        if (arr[i].includes('C')) {
            coxinha += Number(arr[i].split(" ")[0]);
        }
        if (arr[i].includes('R')) {
            risolios += Number(arr[i].split(" ")[0]);
        }
        if (arr[i].includes('P')) {
            pastel += Number(arr[i].split(" ")[0]);
        }

    }

    return [coxinha, risolios, pastel];

}

console.log(contaSalgado(['M', 'T', '20', '20 C', 'N', '20', '20 P']))