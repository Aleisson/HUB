function modaTetragrama(str) {
    
    let hashTable = {};
    let tetragrama = "";
    let answer = ""
    for (let i = 0; i < str.length; i++) {

        tetragrama = str.slice(i, i + 4);
        
        if (tetragrama.length === 4) {
            
            if (hashTable[tetragrama] === undefined) {
                hashTable[tetragrama] = 1;
            } else {
                hashTable[tetragrama]++;
            }
            
        }

    }

    let contMax = 0;

    for (let i = str.length; i >= 0; i--) {
        const elem = str.slice(i - 4, i);
        const contagem = hashTable[elem];

        if(contagem > contMax){
            contMax = contagem;
            answer = elem;
        }

    }


    return answer;
}

console.log(modaTetragrama('AAAABBBBAAAA'));
console.log(modaTetragrama('AAAAABBBB'));
console.log(modaTetragrama('AAAAZZZZ'));
console.log(modaTetragrama('ABC'));