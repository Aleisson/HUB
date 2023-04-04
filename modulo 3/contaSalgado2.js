    function contaSalgado(arr) {

        let index = arr.indexOf('T');
        let arrFilter = arr.slice(2, index);
        let coxinhas = 0;
        let risolios = 0;
        let pasteis = 0;
        console.log(arrFilter);
        for (let i = 0; i < arrFilter.length; i++) {
            
            
            if (arrFilter[i].includes('C')) {
                coxinhas += Number(arrFilter[i].split(" ")[0]);
            }
            if (arrFilter[i].includes('R')) {
                risolios += Number(arrFilter[i].split(" ")[0]);
            }
            if (arrFilter[i].includes('P')) {
                pasteis += Number(arrFilter[i].split(" ")[0]);
            }
            
        }

        return[coxinhas,risolios,pasteis]
    }


console.log(contaSalgado(['M', '50', '10 C', '6 R', '14 P', '20 C', 'T', '20', '20 C', 'N', '20', '20 P']))