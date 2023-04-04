function alienTranslate(alf1, alf2, msg) {
    let hashTable = {};
    let answer = [];
    for (let i = 0; i < alf1.length; i++) {
        
        hashTable[alf1[i]] = alf2[i];
        
    }

    for (let i = 0; i < msg.length; i++) {
        
        answer.push(hashTable[msg[i]]);
        
    }

    return answer;
}

console.log(alienTranslate([10, 20, 43, 55, 1, 90],[22, 32, 44, 80, 9, 3],[55, 1, 1, 10, 20, 10, 43, 43, 55]))